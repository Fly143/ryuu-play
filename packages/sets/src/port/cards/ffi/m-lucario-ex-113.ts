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

export class MLucarioEX_113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lucario-EX";
  public hp: number = 220;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rising Fist", cost: [], damage: "140", text: "Discard an Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "FFI";
  public name: string = "M Lucario-EX";
  public fullName: string = "M Lucario-EX FFI 113";
  public text: string = "M Lucario-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
