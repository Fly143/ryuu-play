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

export class Drowzee_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Forced Sleep", cost: [], damage: "", text: "Your opponent chooses 1 of their Benched Pokémon and switches it with their Active Pokémon. The new Active Pokémon is now Asleep." },
      { name: "Gentle Slap", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SVI";
  public name: string = "Drowzee";
  public fullName: string = "Drowzee SVI 82";
  public text: string = "Drowzee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
