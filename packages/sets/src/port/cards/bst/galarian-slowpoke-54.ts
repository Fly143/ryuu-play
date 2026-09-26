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

export class GalarianSlowpoke_542 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sharpness", cost: [], damage: "10", text: "" },
      { name: "Headbutt", cost: [], damage: "20", text: "" }
  ];
  public set: string = "BST";
  public name: string = "Galarian Slowpoke";
  public fullName: string = "Galarian Slowpoke BST 54";
  public text: string = "Galarian Slowpoke";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
