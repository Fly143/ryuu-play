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

export class Rotom_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crushing Pulse", cost: [], damage: "", text: "Your opponent reveals their hand. Discard all Item cards and Pokémon Tool cards you find there." },
      { name: "Energy Short", cost: [], damage: "20×", text: "This attack does 20 damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "SSP";
  public name: string = "Rotom";
  public fullName: string = "Rotom SSP 61";
  public text: string = "Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
