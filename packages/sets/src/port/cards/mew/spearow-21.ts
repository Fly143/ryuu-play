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

export class Spearow_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Evolutionary Advantage", powerType: PowerType.ABILITY, text: "If you go second, this Pokémon can evolve during your first turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Speed Dive", cost: [], damage: "10", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Spearow";
  public fullName: string = "Spearow MEW 21";
  public text: string = "Spearow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
