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

export class Toedscool_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Clinging Spore", cost: [], damage: "", text: "Attach a Basic Grass Energy card from your hand to 1 of your Benched Pokémon." },
      { name: "Vine Slap", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PAR";
  public name: string = "Toedscool";
  public fullName: string = "Toedscool PAR 15";
  public text: string = "Toedscool";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
