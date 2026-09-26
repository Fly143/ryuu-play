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

export class Marshtomp_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mudkip";
  public hp: number = 90;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mud-Slap", cost: [], damage: "30", text: "" },
      { name: "Energy Loop", cost: [], damage: "80", text: "Put an Energy attached to this Pokémon into your hand." }
  ];
  public set: string = "EVS";
  public name: string = "Marshtomp";
  public fullName: string = "Marshtomp EVS 63";
  public text: string = "Marshtomp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
