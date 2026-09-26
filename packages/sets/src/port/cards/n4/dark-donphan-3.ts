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

export class DarkDonphan_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Phanpy";
  public hp: number = 60;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tusk Toss", cost: [], damage: "", text: "If your opponent has any Benched Pokémon, flip a coin. If heads, return the Defending Pokémon and all cards attached to it to your opponent's hand. If tails, your opponent chooses 1 of his or her Benched Pokémon and switches it with the Defending Pokémon." },
      { name: "Giant Tusk", cost: [], damage: "50", text: "" }
  ];
  public set: string = "N4";
  public name: string = "Dark Donphan";
  public fullName: string = "Dark Donphan N4 3";
  public text: string = "Dark Donphan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
