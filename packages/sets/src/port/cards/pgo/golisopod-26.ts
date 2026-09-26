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

export class Golisopod_262 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wimpod";
  public hp: number = 130;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "First Impression", cost: [], damage: "20+", text: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 90 more damage." },
      { name: "Slash", cost: [], damage: "100", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Golisopod";
  public fullName: string = "Golisopod PGO 26";
  public text: string = "Golisopod";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
