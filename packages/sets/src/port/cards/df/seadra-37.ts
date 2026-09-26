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

export class Seadra_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Horsea";
  public hp: number = 70;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ram", cost: [], damage: "20", text: "" },
      { name: "Extra Ball", cost: [], damage: "30+", text: "If the Defending Pokémon is a Pokémon-ex, this attack does 30 damage plus 30 more damage." }
  ];
  public set: string = "DF";
  public name: string = "Seadra δ";
  public fullName: string = "Seadra δ DF 37";
  public text: string = "Seadra δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
