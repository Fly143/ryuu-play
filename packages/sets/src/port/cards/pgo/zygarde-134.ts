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

export class Zygarde_134 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shout of Power", cost: [], damage: "20", text: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon." },
      { name: "Speed Attack", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Zygarde";
  public fullName: string = "Zygarde PGO 134";
  public text: string = "Zygarde";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
