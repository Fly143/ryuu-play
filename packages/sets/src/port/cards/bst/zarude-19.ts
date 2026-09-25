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

export class Zarude_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pack Call", cost: [], damage: "", text: "Search your deck for a Grass Pokémon, reveal it, and put it into your hand. If you go second and it's your first turn, search for up to 3 Grass Pokémon instead of 1. Then, shuffle your deck." },
      { name: "Repeated Whip", cost: [], damage: "60+", text: "This attack does 20 more damage for each Grass Energy attached to this Pokémon." }
  ];
  public set: string = "BST";
  public name: string = "Zarude";
  public fullName: string = "Zarude BST 19";
  public text: string = "Zarude";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
