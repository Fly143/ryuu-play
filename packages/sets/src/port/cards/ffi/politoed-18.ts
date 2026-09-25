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

export class Politoed_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poliwhirl";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "King's Song", powerType: PowerType.ABILITY, text: "Ignore all Colorless Energy in the attack cost of each of your Poliwag, Poliwhirl, and Poliwrath's attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hyper Voice", cost: [], damage: "70", text: "" }
  ];
  public set: string = "FFI";
  public name: string = "Politoed";
  public fullName: string = "Politoed FFI 18";
  public text: string = "Politoed";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
