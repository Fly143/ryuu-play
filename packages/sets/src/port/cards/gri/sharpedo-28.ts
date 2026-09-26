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

export class Sharpedo_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Carvanha";
  public hp: number = 90;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Jet Headbutt", cost: [], damage: "70", text: "" }
  ];
  public set: string = "GRI";
  public name: string = "Sharpedo";
  public fullName: string = "Sharpedo GRI 28";
  public text: string = "Sharpedo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
