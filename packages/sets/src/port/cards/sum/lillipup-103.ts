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

export class Lillipup_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Work Up", cost: [], damage: "", text: "During your next turn, this Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." },
      { name: "Bite", cost: [], damage: "20", text: "" }
  ];
  public set: string = "SUM";
  public name: string = "Lillipup";
  public fullName: string = "Lillipup SUM 103";
  public text: string = "Lillipup";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
