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

export class IronBundle_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gusting Collision", cost: [], damage: "200-", text: "This attack does 50 less damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "SSP";
  public name: string = "Iron Bundle";
  public fullName: string = "Iron Bundle SSP 55";
  public text: string = "Iron Bundle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
