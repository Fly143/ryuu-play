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

export class MagearnaXY165 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Entertain", cost: [], damage: "", text: "Heal 40 damage from 1 of your Benched Pokémon." },
      { name: "Prismatic Wave", cost: [], damage: "20×", text: "This attack does 20 damage times the number of different types of Pokémon on your opponent's Bench." }
  ];
  public set: string = "PR-XY";
  public name: string = "Magearna";
  public fullName: string = "Magearna PR-XY XY165";
  public text: string = "Magearna";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "healBench:40");
    }
    return state;
  }
}
