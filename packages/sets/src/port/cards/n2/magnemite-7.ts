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

export class Magnemite_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lock-on", cost: [], damage: "", text: "During your next turn, treat any tails flipped when using Magnemite's Electric Bolt attack as if they were heads. (Benching or evolving either Pokémon ends this effect.)" },
      { name: "Electric Bolt", cost: [], damage: "50", text: "Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If either of them is tails, this attack does nothing (not even damage)." }
  ];
  public set: string = "N2";
  public name: string = "Magnemite";
  public fullName: string = "Magnemite N2 7";
  public text: string = "Magnemite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
