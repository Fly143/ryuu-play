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

export class TrevenantVMAX_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Trevenant V";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Missing in the Forest", cost: [], damage: "40×", text: "This attack does 40 damage for each Supporter card in your opponent's discard pile." },
      { name: "Max Tree", cost: [], damage: "180", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Trevenant VMAX";
  public fullName: string = "Trevenant VMAX CRE 14";
  public text: string = "Trevenant VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
