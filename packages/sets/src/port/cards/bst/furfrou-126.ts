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

export class Furfrou_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Find a Friend", cost: [], damage: "", text: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Fur Attack", cost: [], damage: "90", text: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "BST";
  public name: string = "Furfrou";
  public fullName: string = "Furfrou BST 126";
  public text: string = "Furfrou";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
