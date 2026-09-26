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

export class Venonat_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Leech Life", cost: [], damage: "10", text: "Remove from Venonat the number of damage counters equal to the damage you did to the Defending Pokémon." },
      { name: "Tackle", cost: [], damage: "20", text: "" }
  ];
  public set: string = "TM";
  public name: string = "Venonat";
  public fullName: string = "Venonat TM 81";
  public text: string = "Venonat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
