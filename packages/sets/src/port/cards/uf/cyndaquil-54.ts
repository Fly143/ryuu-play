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

export class Cyndaquil_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Paralyzing Gaze", cost: [], damage: "", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." },
      { name: "Fireworks", cost: [], damage: "30", text: "Flip a coin. If tails, discard a Fire Energy card attached to Cyndaquil." }
  ];
  public set: string = "UF";
  public name: string = "Cyndaquil";
  public fullName: string = "Cyndaquil UF 54";
  public text: string = "Cyndaquil";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
