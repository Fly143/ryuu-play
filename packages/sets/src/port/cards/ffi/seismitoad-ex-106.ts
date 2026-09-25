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

export class SeismitoadEX_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Quaking Punch", cost: [], damage: "30", text: "Your opponent can't play any Item cards from his or her hand during his or her next turn." },
      { name: "Grenade Hammer", cost: [], damage: "130", text: "This attack does 30 damage to 2 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "FFI";
  public name: string = "Seismitoad-EX";
  public fullName: string = "Seismitoad-EX FFI 106";
  public text: string = "Seismitoad-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
