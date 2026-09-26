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

export class Pinsir_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Grip and Squeeze", cost: [], damage: "30", text: "The Defending Pokémon can't retreat during your opponent's next turn." },
      { name: "Guillotine Hug", cost: [], damage: "", text: "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out." }
  ];
  public set: string = "UNB";
  public name: string = "Pinsir";
  public fullName: string = "Pinsir UNB 9";
  public text: string = "Pinsir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
