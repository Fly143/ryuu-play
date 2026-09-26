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

export class Cherubi_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Growth", cost: [], damage: "", text: "Attach a Grass Energy from your hand to Cherubi." },
      { name: "Razor Leaf", cost: [], damage: "10", text: "" }
  ];
  public set: string = "SV";
  public name: string = "Cherubi";
  public fullName: string = "Cherubi SV 96";
  public text: string = "Cherubi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
