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

export class Remoraid_332 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flail", cost: [], damage: "10×", text: "This attack does 10 damage for each damage counter on this Pokémon." },
      { name: "Rain Splash", cost: [], damage: "20", text: "" }
  ];
  public set: string = "JTG";
  public name: string = "Remoraid";
  public fullName: string = "Remoraid JTG 33";
  public text: string = "Remoraid";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
