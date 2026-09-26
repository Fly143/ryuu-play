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

export class BreloomV_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Counter", cost: [], damage: "20+", text: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage." },
      { name: "Mach Cross", cost: [], damage: "140", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Breloom V";
  public fullName: string = "Breloom V EVS 6";
  public text: string = "Breloom V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
