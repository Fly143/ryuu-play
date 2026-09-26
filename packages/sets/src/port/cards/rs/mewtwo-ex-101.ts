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

export class MewtwoEx_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Absorption", cost: [], damage: "", text: "Attach up to 2 Energy cards from your discard pile to Mewtwo ex." },
      { name: "Psyburn", cost: [], damage: "60", text: "" }
  ];
  public set: string = "RS";
  public name: string = "Mewtwo ex";
  public fullName: string = "Mewtwo ex RS 101";
  public text: string = "Mewtwo ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
