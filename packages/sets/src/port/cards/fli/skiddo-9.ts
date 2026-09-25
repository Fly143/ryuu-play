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

export class Skiddo_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Growth", cost: [], damage: "", text: "Attach a Grass Energy card from your hand to this Pokémon." },
      { name: "Razor Leaf", cost: [], damage: "40", text: "" }
  ];
  public set: string = "FLI";
  public name: string = "Skiddo";
  public fullName: string = "Skiddo FLI 9";
  public text: string = "Skiddo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
