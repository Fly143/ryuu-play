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

export class Drowzee_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Disable", cost: [], damage: "", text: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn." },
      { name: "Headbutt", cost: [], damage: "20", text: "" }
  ];
  public set: string = "DS";
  public name: string = "Drowzee";
  public fullName: string = "Drowzee DS 67";
  public text: string = "Drowzee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "metronome");
    }
    return state;
  }
}
