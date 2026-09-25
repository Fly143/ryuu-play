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

export class Aggron_142 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lairon";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Return Blow", cost: [], damage: "", text: "If Aggron was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Aggron to the Defending Pokémon." },
      { name: "Metal Fang", cost: [], damage: "40", text: "You may discard the top card of your deck. If you do, remove 2 damage counters and all Special Conditions from Aggron." },
      { name: "Heavy Impact", cost: [], damage: "70", text: "" }
  ];
  public set: string = "RR";
  public name: string = "Aggron";
  public fullName: string = "Aggron RR 14";
  public text: string = "Aggron";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
