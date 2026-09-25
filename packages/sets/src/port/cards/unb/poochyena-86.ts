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

export class Poochyena_862 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Howl in the Dark", cost: [], damage: "", text: "Search your deck for up to 2 Darkness Pokémon, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Bite", cost: [], damage: "10", text: "" }
  ];
  public set: string = "UNB";
  public name: string = "Poochyena";
  public fullName: string = "Poochyena UNB 86";
  public text: string = "Poochyena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    return state;
  }
}
