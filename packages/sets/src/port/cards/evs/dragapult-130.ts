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

export class Dragapult_130 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drakloak";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fusion Strike Assault", cost: [], damage: "30×", text: "This attack does 30 damage for each of your Fusion Strike Pokémon in play." },
      { name: "Speed Attack", cost: [], damage: "120", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Dragapult";
  public fullName: string = "Dragapult EVS 130";
  public text: string = "Dragapult";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
