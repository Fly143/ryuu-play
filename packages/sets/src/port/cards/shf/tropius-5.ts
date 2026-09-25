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

export class Tropius_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Attach Leaves", cost: [], damage: "", text: "Attach up to 2 Grass Energy cards from your discard pile to your Benched Pokémon in any way you like." },
      { name: "Gust", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Tropius";
  public fullName: string = "Tropius SHF 5";
  public text: string = "Tropius";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
