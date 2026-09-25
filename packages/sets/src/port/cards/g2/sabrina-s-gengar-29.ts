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

export class SabrinaSGengar_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sabrina's Haunter";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dark Wave", cost: [], damage: "20", text: "All Pokémon Powers stop working until the end of your opponent's next turn." },
      { name: "Shadow Bind", cost: [], damage: "40", text: "The Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "G2";
  public name: string = "Sabrina's Gengar";
  public fullName: string = "Sabrina's Gengar G2 29";
  public text: string = "Sabrina's Gengar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "noPowers");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
