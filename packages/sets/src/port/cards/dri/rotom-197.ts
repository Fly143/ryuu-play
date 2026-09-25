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

export class Rotom_197 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Astonish", cost: [], damage: "20", text: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck." },
      { name: "Gadget Show", cost: [], damage: "30×", text: "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon." }
  ];
  public set: string = "DRI";
  public name: string = "Rotom";
  public fullName: string = "Rotom DRI 197";
  public text: string = "Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
