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

export class KabutopsEx_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kabuto";
  public hp: number = 150;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hydrocutter", cost: [], damage: "40×", text: "Flip a number of coins equal to the amount of Energy attached to Kabutops ex. This attack does 40 damage times the number of heads. You can't flip more than 3 coins in this way." },
      { name: "Spiral Drain", cost: [], damage: "70", text: "Remove 2 damage counters from Kabutops ex (remove 1 if there is only 1)." }
  ];
  public set: string = "SS";
  public name: string = "Kabutops ex";
  public fullName: string = "Kabutops ex SS 97";
  public text: string = "Kabutops ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
