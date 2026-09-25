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

export class Weavile_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sneasel";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Two-Hit KO", cost: [], damage: "", text: "During your next turn, if the Defending Pokémon is damaged by an attack from a Rapid Strike Pokémon, it will be Knocked Out." },
      { name: "Nasty Plot", cost: [], damage: "", text: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck." }
  ];
  public set: string = "BST";
  public name: string = "Weavile";
  public fullName: string = "Weavile BST 31";
  public text: string = "Weavile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    return state;
  }
}
