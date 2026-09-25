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

export class ToxtricityEx_227 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Toxel";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Knocking Hammer", cost: [], damage: "70", text: "Discard the top card of your opponent's deck." },
      { name: "Gaia Punk", cost: [], damage: "270", text: "Discard 3 Lightning Energy from your Pokémon." }
  ];
  public set: string = "PAR";
  public name: string = "Toxtricity ex";
  public fullName: string = "Toxtricity ex PAR 227";
  public text: string = "Toxtricity ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
