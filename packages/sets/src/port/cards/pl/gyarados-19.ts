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

export class Gyarados_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magikarp";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tail Revenge", cost: [], damage: "30×", text: "Does 30 damage times the number of Magikarp in your discard pile." },
      { name: "Wreak Havoc", cost: [], damage: "40", text: "Flip a coin until you get tails. For each heads, discard the top card from your opponent's deck." },
      { name: "Dragon Beat", cost: [], damage: "100", text: "Flip a coin. If heads, discard an Energy card from each of your opponent's Pokémon." }
  ];
  public set: string = "PL";
  public name: string = "Gyarados";
  public fullName: string = "Gyarados PL 19";
  public text: string = "Gyarados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* damageTimesDiscardPokemon:30 */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
