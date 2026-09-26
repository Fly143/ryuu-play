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

export class Groudon_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magma Volcano", cost: [], damage: "80×", text: "Discard the top 5 cards of your deck. This attack does 80 damage for each Energy card you discarded in this way." },
      { name: "Massive Rend", cost: [], damage: "120", text: "" }
  ];
  public set: string = "CEL";
  public name: string = "Groudon";
  public fullName: string = "Groudon CEL 17";
  public text: string = "Groudon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 5);
    }
    return state;
  }
}
