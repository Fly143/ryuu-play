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

export class Spinda_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Synchro Removal", cost: [], damage: "", text: "If any Energy card attached to Spinda is the same type as any Energy card attached to the Defending Pokémon, discard 1 of those Energy cards from the Defending Pokémon." },
      { name: "Pulled Punch", cost: [], damage: "30", text: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 10 instead of 30." }
  ];
  public set: string = "SV";
  public name: string = "Spinda";
  public fullName: string = "Spinda SV 46";
  public text: string = "Spinda";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
