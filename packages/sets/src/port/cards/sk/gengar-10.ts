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

export class Gengar_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Haunter";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Manipulate", powerType: PowerType.ABILITY, text: "When you play Gengar from your hand to evolve your Active Pokémon, you may put a Basic Pokémon (excluding Baby Pokémon) from your discard pile onto your Bench. Then, flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hydrokinesis", cost: [], damage: "40", text: "Flip a coin. If heads, the Defending Pokémon is now Burned. If tails, the Defending Pokémon is now Confused." }
  ];
  public set: string = "SK";
  public name: string = "Gengar";
  public fullName: string = "Gengar SK 10";
  public text: string = "Gengar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
