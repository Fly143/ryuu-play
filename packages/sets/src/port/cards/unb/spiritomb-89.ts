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

export class Spiritomb_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spirit Compressor", cost: [], damage: "", text: "Search your deck for up to 4 Pokémon and discard them. Then, shuffle your deck." },
      { name: "Spooky Shot", cost: [], damage: "20", text: "" }
  ];
  public set: string = "UNB";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb UNB 89";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
