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

export class Rayquaza_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Turbo Storm", cost: [], damage: "30", text: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon." },
      { name: "Dragon Claw", cost: [], damage: "80", text: "" }
  ];
  public set: string = "GRI";
  public name: string = "Rayquaza";
  public fullName: string = "Rayquaza GRI 106";
  public text: string = "Rayquaza";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
