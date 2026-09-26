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

export class Corvisquire_151 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rookidee";
  public hp: number = 80;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pluck", cost: [], damage: "20", text: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon." },
      { name: "Drill Peck", cost: [], damage: "50", text: "" }
  ];
  public set: string = "SSH";
  public name: string = "Corvisquire";
  public fullName: string = "Corvisquire SSH 151";
  public text: string = "Corvisquire";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
