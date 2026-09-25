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

export class AlolanMarowak_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cubone";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Limbo Limbo", cost: [], damage: "", text: "Search your deck for up to 2 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck." },
      { name: "Alolan Club", cost: [], damage: "20×", text: "This attack does 20 damage for each of your Pokémon in play that has Alolan in its name." }
  ];
  public set: string = "UNB";
  public name: string = "Alolan Marowak";
  public fullName: string = "Alolan Marowak UNB 64";
  public text: string = "Alolan Marowak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
