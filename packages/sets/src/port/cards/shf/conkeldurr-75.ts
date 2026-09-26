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

export class Conkeldurr_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gurdurr";
  public hp: number = 160;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hammer Pressure", cost: [], damage: "90", text: "If the Defending Pokémon is an Evolution Pokémon, it can't attack during your opponent's next turn." },
      { name: "Mega Punch", cost: [], damage: "150", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Conkeldurr";
  public fullName: string = "Conkeldurr SHF 75";
  public text: string = "Conkeldurr";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
