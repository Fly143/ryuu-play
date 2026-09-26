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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MistySTentacool_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mysterious Light", cost: [], damage: "", text: "Flip a coin. If heads, the Defending Pokémon is now Asleep." },
      { name: "Jellyfish Pod", cost: [], damage: "", text: "Search your deck for any number of Pokémon named Tentacool, Tentacruel, Misty's Tentacool, and/or Misty's Tentacruel. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "G1";
  public name: string = "Misty's Tentacool";
  public fullName: string = "Misty's Tentacool G1 32";
  public text: string = "Misty's Tentacool";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
