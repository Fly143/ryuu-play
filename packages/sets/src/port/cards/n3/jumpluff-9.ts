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

export class Jumpluff_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skiploom";
  public hp: number = 70;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Evolutionary Spore", cost: [], damage: "", text: "Choose any number of your Hoppips and Skiplooms. Then, for each Pokémon you chose in this way, you may search your deck for a card that evolves from that Pokémon and attach it to that Pokémon. (This counts as evolving those Pokémon.) Shuffle your deck afterward." },
      { name: "Solarbeam", cost: [], damage: "30", text: "" }
  ];
  public set: string = "N3";
  public name: string = "Jumpluff";
  public fullName: string = "Jumpluff N3 9";
  public text: string = "Jumpluff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
