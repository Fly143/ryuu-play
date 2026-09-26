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

export class Meowscarada_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Floragato";
  public hp: number = 160;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Trick Cape", cost: [], damage: "40", text: "You may put an Energy attached to your opponent's Active Pokémon into their hand." },
      { name: "Flower Blast", cost: [], damage: "130", text: "" }
  ];
  public set: string = "SVI";
  public name: string = "Meowscarada";
  public fullName: string = "Meowscarada SVI 15";
  public text: string = "Meowscarada";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
