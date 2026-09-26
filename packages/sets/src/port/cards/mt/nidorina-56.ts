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

export class Nidorina_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidoran ♀";
  public hp: number = 80;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rescue", cost: [], damage: "", text: "Search your discard pile for up to 2 Pokémon, show them to your opponent, and put them into your hand." },
      { name: "Scratch", cost: [], damage: "30", text: "" }
  ];
  public set: string = "MT";
  public name: string = "Nidorina";
  public fullName: string = "Nidorina MT 56";
  public text: string = "Nidorina";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
