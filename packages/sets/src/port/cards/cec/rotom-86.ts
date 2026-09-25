import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Rotom_86 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cycle Draw", cost: [], damage: "", text: "Discard a card from your hand. If you do, draw 2 cards." },
      { name: "Energy Assist", cost: [], damage: "", text: "Attach 2 basic Energy cards from your discard pile to your Benched Pokémon in any way you like." }
  ];
  public set: string = "CEC";
  public name: string = "Rotom";
  public fullName: string = "Rotom CEC 86";
  public text: string = "Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
