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

export class Gabite_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gible";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gather Up", cost: [], damage: "", text: "Search your discard pile for up to 2 Energy cards, show them to your opponent, and put them into your hand." },
      { name: "Marvelous Shine", cost: [], damage: "", text: "Flip a coin. If heads put 4 damage counters on 1 of your opponent's Pokémon. If tails, remove 4 damage counters from 1 of your Pokémon." }
  ];
  public set: string = "MT";
  public name: string = "Gabite";
  public fullName: string = "Gabite MT 48";
  public text: string = "Gabite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
