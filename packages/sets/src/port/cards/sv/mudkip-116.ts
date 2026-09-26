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

export class Mudkip_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mud Sport", cost: [], damage: "10+", text: "If Mudkip has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage." },
      { name: "Surf", cost: [], damage: "20", text: "" }
  ];
  public set: string = "SV";
  public name: string = "Mudkip";
  public fullName: string = "Mudkip SV 116";
  public text: string = "Mudkip";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
