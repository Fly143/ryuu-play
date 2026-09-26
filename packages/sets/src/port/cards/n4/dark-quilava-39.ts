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

export class DarkQuilava_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cyndaquil";
  public hp: number = 60;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Incinerate", cost: [], damage: "", text: "Show the top card of your opponent's deck to all players. If it's a Trainer card, discard it." },
      { name: "Rushing Magma", cost: [], damage: "20×", text: "Discard the top 5 cards of your deck. (If there are fewer than 5 cards in your deck, discard all of them.) This attack does 20 damage for each Fire Energy card you discarded in this way." }
  ];
  public set: string = "N4";
  public name: string = "Dark Quilava";
  public fullName: string = "Dark Quilava N4 39";
  public text: string = "Dark Quilava";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 5);
    }
    return state;
  }
}
