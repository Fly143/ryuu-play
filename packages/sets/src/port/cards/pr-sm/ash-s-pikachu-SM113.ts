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

export class AshSPikachuSM113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Iron Tail", cost: [], damage: "20×", text: "Flip a coin until you get tails. This attack does 20 damage for each heads." },
      { name: "Electro Ball", cost: [], damage: "50", text: "" }
  ];
  public set: string = "PR-SM";
  public name: string = "Ash's Pikachu";
  public fullName: string = "Ash's Pikachu PR-SM SM113";
  public text: string = "Ash's Pikachu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 20);
    }
    return state;
  }
}
