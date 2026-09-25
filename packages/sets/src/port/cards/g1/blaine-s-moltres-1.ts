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

export class BlaineSMoltres_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Phoenix Flame", cost: [], damage: "90", text: "Flip a coin. If tails, shuffle Blaine's Moltres and all cards attached to it into your deck (after doing damage)." }
  ];
  public set: string = "G1";
  public name: string = "Blaine's Moltres";
  public fullName: string = "Blaine's Moltres G1 1";
  public text: string = "Blaine's Moltres";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
