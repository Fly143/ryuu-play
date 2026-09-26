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

export class Hippowdon_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hippopotas";
  public hp: number = 160;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ram", cost: [], damage: "60", text: "" },
      { name: "Super Sandstorm", cost: [], damage: "150", text: "This attack also does 40 damage to each Benched Pokémon that has any damage counters on it (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DRI";
  public name: string = "Hippowdon";
  public fullName: string = "Hippowdon DRI 106";
  public text: string = "Hippowdon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
