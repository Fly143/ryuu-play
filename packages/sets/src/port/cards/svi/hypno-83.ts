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

export class Hypno_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drowzee";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pendulum Influence", cost: [], damage: "", text: "Flip a coin. If heads, choose an attack from 1 of your opponent's Pokémon in play and use it as this attack." },
      { name: "Psychic Sphere", cost: [], damage: "100", text: "" }
  ];
  public set: string = "SVI";
  public name: string = "Hypno";
  public fullName: string = "Hypno SVI 83";
  public text: string = "Hypno";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* copyAttack */ state;
    }
    return state;
  }
}
