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

export class GreatTusk_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 140;
  
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Land Collapse", cost: [], damage: "", text: "Discard the top card of your opponent's deck. If you played an Ancient Supporter card from your hand during this turn, discard 3 more cards in this way." },
      { name: "Giant Tusk", cost: [], damage: "160", text: "" }
  ];
  public set: string = "PRE";
  public name: string = "Great Tusk";
  public fullName: string = "Great Tusk PRE 55";
  public text: string = "Great Tusk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
