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

export class AlolanDiglett_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spelunk", cost: [], damage: "", text: "Look at the top 3 cards of your deck and put them back in any order." },
      { name: "Mud-Slap", cost: [], damage: "10", text: "" }
  ];
  public set: string = "MCD17";
  public name: string = "Alolan Diglett";
  public fullName: string = "Alolan Diglett MCD17 9";
  public text: string = "Alolan Diglett";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* pokedex */ state;
    }
    return state;
  }
}
