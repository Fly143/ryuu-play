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

export class Joltik_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gnaw", cost: [], damage: "10", text: "" },
      { name: "Night March", cost: [], damage: "20×", text: "This attack does 20 damage times the number of Pokémon in your discard pile that have the Night March attack." }
  ];
  public set: string = "PHF";
  public name: string = "Joltik";
  public fullName: string = "Joltik PHF 26";
  public text: string = "Joltik";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesDiscardPokemon:20");
    }
    return state;
  }
}
