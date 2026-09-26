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

export class Metapod_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Caterpie";
  public hp: number = 80;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Adaptive Evolution", powerType: PowerType.ABILITY, text: "This Pokémon can evolve during your first turn or the turn you play it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ram", cost: [], damage: "20", text: "" }
  ];
  public set: string = "RCL";
  public name: string = "Metapod";
  public fullName: string = "Metapod RCL 2";
  public text: string = "Metapod";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
