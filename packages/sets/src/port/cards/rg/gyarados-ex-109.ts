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

export class GyaradosEx_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magikarp";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Twister", cost: [], damage: "40", text: "Flip 2 coins. For each heads, choose 1 Energy attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing." },
      { name: "Dragon Rage", cost: [], damage: "100", text: "" }
  ];
  public set: string = "RG";
  public name: string = "Gyarados ex";
  public fullName: string = "Gyarados ex RG 109";
  public text: string = "Gyarados ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
