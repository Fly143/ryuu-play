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

export class Kingdra_192 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seadra";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Genetic Memory", cost: [], damage: "", text: "Use any attack from Kingdra's Basic Pokémon card or Evolution card. (Kingdra doesn't have to pay for that attack's Energy cost.)" },
      { name: "Twister", cost: [], damage: "50", text: "Flip 2 coins. For each heads, choose 1 Energy card attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing (not even damage)." }
  ];
  public set: string = "N3";
  public name: string = "Kingdra";
  public fullName: string = "Kingdra N3 19";
  public text: string = "Kingdra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
