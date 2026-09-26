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

export class Zeraora_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crushing Claw", cost: [], damage: "20", text: "Discard a Special Energy from your opponent's Active Pokémon." },
      { name: "Discharge", cost: [], damage: "50×", text: "Discard all Lightning Energy from this Pokémon. This attack does 50 damage for each card you discarded in this way." }
  ];
  public set: string = "UNM";
  public name: string = "Zeraora";
  public fullName: string = "Zeraora UNM 60";
  public text: string = "Zeraora";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
