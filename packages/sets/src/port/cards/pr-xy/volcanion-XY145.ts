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

export class VolcanionXY145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Power Heater", cost: [], damage: "20", text: "Choose 2 of your Benched Pokémon. Attach a Fire Energy card from your discard pile to each of those Pokémon." },
      { name: "Steam Artillery", cost: [], damage: "100", text: "" }
  ];
  public set: string = "PR-XY";
  public name: string = "Volcanion";
  public fullName: string = "Volcanion PR-XY XY145";
  public text: string = "Volcanion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
