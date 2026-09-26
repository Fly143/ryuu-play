import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GalarianStunfisk_127 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Field Trap", cost: [], damage: "20", text: "If your opponent has a Stadium in play, discard it. If you discarded a Stadium in this way, discard 2 Energy from your opponent's Active Pokémon." },
      { name: "Tackle", cost: [], damage: "50", text: "" }
  ];
  public set: string = "ASR";
  public name: string = "Galarian Stunfisk";
  public fullName: string = "Galarian Stunfisk ASR 127";
  public text: string = "Galarian Stunfisk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
