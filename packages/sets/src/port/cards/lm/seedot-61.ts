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

export class Seedot_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drawup Power", cost: [], damage: "", text: "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward." },
      { name: "Continuous Tumble", cost: [], damage: "10×", text: "Flip a coin until you get tails. This attack does 10 damage times the number of heads." }
  ];
  public set: string = "LM";
  public name: string = "Seedot";
  public fullName: string = "Seedot LM 61";
  public text: string = "Seedot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
