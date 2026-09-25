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

export class Ariados_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spinarak";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hidden Threads", powerType: PowerType.ABILITY, text: "Your opponent's Pokémon VSTAR's attacks cost Colorless more. You can't apply more than 1 Hidden Threads Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pierce", cost: [], damage: "50", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Ariados";
  public fullName: string = "Ariados PGO 4";
  public text: string = "Ariados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
