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

export class Tropius_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fruity Aroma", cost: [], damage: "", text: "Look at the top 6 cards of your deck, and you may reveal any number of Pokémon you find there and put them into your hand. Shuffle the other cards back into your deck." },
      { name: "Solar Beam", cost: [], damage: "60", text: "" }
  ];
  public set: string = "PBL";
  public name: string = "Tropius";
  public fullName: string = "Tropius PBL 1";
  public text: string = "Tropius";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
