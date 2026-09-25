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

export class ReshiramV_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sparkling Wing", cost: [], damage: "", text: "Search your deck for up to 2 basic Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck." },
      { name: "White Blaze", cost: [], damage: "200", text: "Flip a coin. If tails, during your next turn, this Pokémon can't attack." }
  ];
  public set: string = "PGO";
  public name: string = "Reshiram V";
  public fullName: string = "Reshiram V PGO 24";
  public text: string = "Reshiram V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
