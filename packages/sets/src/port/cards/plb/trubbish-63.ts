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

export class Trubbish_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pile Up", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Shuffle your deck afterward." },
      { name: "Sludge Toss", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PLB";
  public name: string = "Trubbish";
  public fullName: string = "Trubbish PLB 63";
  public text: string = "Trubbish";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    return state;
  }
}
