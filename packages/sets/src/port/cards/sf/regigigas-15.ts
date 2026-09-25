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

export class Regigigas_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Slow Start", powerType: PowerType.ABILITY, text: "Regigigas can't attack until your opponent has 3 or less Prize cards left.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crush Grip", cost: [], damage: "120", text: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 40 instead of 120." }
  ];
  public set: string = "SF";
  public name: string = "Regigigas";
  public fullName: string = "Regigigas SF 15";
  public text: string = "Regigigas";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
