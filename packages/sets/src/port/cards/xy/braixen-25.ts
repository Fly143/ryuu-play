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

export class Braixen_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fennekin";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Clairvoyant Eye", cost: [], damage: "", text: "Look at the top 3 cards of your deck and put them back on top of your deck in any order." },
      { name: "Fire Tail Slap", cost: [], damage: "40", text: "Discard a Fire Energy attached to this Pokémon." }
  ];
  public set: string = "XY";
  public name: string = "Braixen";
  public fullName: string = "Braixen XY 25";
  public text: string = "Braixen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "pokedex");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
