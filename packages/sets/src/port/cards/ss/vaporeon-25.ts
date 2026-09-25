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

export class Vaporeon_252 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Aurora Beam", cost: [], damage: "30", text: "" },
      { name: "Aqua Sonic", cost: [], damage: "50", text: "This attack's damage is not affected by Resistance." }
  ];
  public set: string = "SS";
  public name: string = "Vaporeon";
  public fullName: string = "Vaporeon SS 25";
  public text: string = "Vaporeon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
