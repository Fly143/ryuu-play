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

export class Scyther_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Helpful Slash", cost: [], damage: "20", text: "Attach a Basic Grass Energy card from your discard pile to 1 of your Benched Pokémon." },
      { name: "Slicing Blade", cost: [], damage: "70", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Scyther";
  public fullName: string = "Scyther MEW 123";
  public text: string = "Scyther";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
