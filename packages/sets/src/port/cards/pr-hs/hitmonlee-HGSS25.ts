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

export class HitmonleeHGSS25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Kick", cost: [], damage: "20", text: "" },
      { name: "High Jump Kick", cost: [], damage: "60", text: "" }
  ];
  public set: string = "PR-HS";
  public name: string = "Hitmonlee";
  public fullName: string = "Hitmonlee PR-HS HGSS25";
  public text: string = "Hitmonlee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
