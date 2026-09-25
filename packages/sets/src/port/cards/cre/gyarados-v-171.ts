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

export class GyaradosV_171 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Get Angry", cost: [], damage: "20×", text: "This attack does 20 damage for each damage counter on this Pokémon." },
      { name: "Heavy Storm", cost: [], damage: "180", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Gyarados V";
  public fullName: string = "Gyarados V CRE 171";
  public text: string = "Gyarados V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
