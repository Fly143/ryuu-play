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

export class Ivysaur_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bulbasaur";
  public hp: number = 60;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Strange Scent", cost: [], damage: "", text: "Each player flips a coin. Each player who gets heads chooses a total of 3 damage counters from among his or her Pokémon and removes them. (If the player's Pokémon have fewer total damage counters than that, he or she removes all of them.)" },
      { name: "Razor Leaf", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SI1";
  public name: string = "Ivysaur";
  public fullName: string = "Ivysaur SI1 5";
  public text: string = "Ivysaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
