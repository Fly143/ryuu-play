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

export class Chansey_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bind Wound", cost: [], damage: "", text: "Flip a coin. If heads, remove 2 damage counters from 1 of your Pokémon (1 if it has only 1)." },
      { name: "Dogpile", cost: [], damage: "10×", text: "Count the number of Pokémon on your Bench. This attack does 10 times that number of damage to the Defending Pokémon, and Chansey does 10 times that number of damage to itself." }
  ];
  public set: string = "EX";
  public name: string = "Chansey";
  public fullName: string = "Chansey EX 72";
  public text: string = "Chansey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
