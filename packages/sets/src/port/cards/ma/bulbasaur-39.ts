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

export class Bulbasaur_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Growth", cost: [], damage: "", text: "Attach a Grass Energy card from your hand to Bulbasaur." },
      { name: "Razor Leaf", cost: [], damage: "10", text: "" }
  ];
  public set: string = "MA";
  public name: string = "Bulbasaur";
  public fullName: string = "Bulbasaur MA 39";
  public text: string = "Bulbasaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
