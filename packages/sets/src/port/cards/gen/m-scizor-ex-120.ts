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

export class MScizorEX_120 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Scizor-EX";
  public hp: number = 220;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Iron Crusher", cost: [], damage: "120", text: "You may discard a Special Energy attached to your opponent's Active Pokémon or a Stadium card in play." }
  ];
  public set: string = "GEN";
  public name: string = "M Scizor-EX";
  public fullName: string = "M Scizor-EX GEN 120";
  public text: string = "M Scizor-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
