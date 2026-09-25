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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Venomoth_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Venonat";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dizzying Wind", cost: [], damage: "", text: "Whenever your opponent plays a Trainer card from his or her hand during his or her next turn, your opponent flips a coin. If tails, that card has no effect. (Your opponent still discards that card.)" },
      { name: "Noxious Scales", cost: [], damage: "50", text: "Your opponent's Active Pokémon is now Confused and Poisoned." }
  ];
  public set: string = "PHF";
  public name: string = "Venomoth";
  public fullName: string = "Venomoth PHF 2";
  public text: string = "Venomoth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
