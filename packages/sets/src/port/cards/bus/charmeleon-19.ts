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

export class Charmeleon_192 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmander";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Claw Slash", cost: [], damage: "30", text: "" },
      { name: "Heat Blast", cost: [], damage: "70", text: "" }
  ];
  public set: string = "BUS";
  public name: string = "Charmeleon";
  public fullName: string = "Charmeleon BUS 19";
  public text: string = "Charmeleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
