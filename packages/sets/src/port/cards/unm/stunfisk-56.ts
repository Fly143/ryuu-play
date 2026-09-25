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

export class Stunfisk_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Raging Thunder", cost: [], damage: "30", text: "This attack does 10 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Electric Trap", cost: [], damage: "30×", text: "This attack does 30 damage for each of your Pokémon that has any damage counters on it." }
  ];
  public set: string = "UNM";
  public name: string = "Stunfisk";
  public fullName: string = "Stunfisk UNM 56";
  public text: string = "Stunfisk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOwnBench(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
