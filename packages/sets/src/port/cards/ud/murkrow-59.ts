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

export class Murkrow_59 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Glide", cost: [], damage: "10", text: "" },
      { name: "Dark Cutter", cost: [], damage: "30", text: "" }
  ];
  public set: string = "UD";
  public name: string = "Murkrow";
  public fullName: string = "Murkrow UD 59";
  public text: string = "Murkrow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
