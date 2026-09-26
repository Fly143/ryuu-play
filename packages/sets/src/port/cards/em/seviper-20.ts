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

export class Seviper_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 2.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pierce", cost: [], damage: "10", text: "" },
      { name: "Bite Off", cost: [], damage: "30+", text: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 30 more damage." }
  ];
  public set: string = "EM";
  public name: string = "Seviper";
  public fullName: string = "Seviper EM 20";
  public text: string = "Seviper";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
