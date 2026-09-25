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

export class Noibat_156 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Knickknack Carrying", cost: [], damage: "", text: "Search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Bite", cost: [], damage: "30", text: "" }
  ];
  public set: string = "ASC";
  public name: string = "Noibat";
  public fullName: string = "Noibat ASC 156";
  public text: string = "Noibat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    return state;
  }
}
