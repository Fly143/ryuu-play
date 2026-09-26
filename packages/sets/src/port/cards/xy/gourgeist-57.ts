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

export class Gourgeist_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pumpkaboo";
  public hp: number = 100;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Eerie Voice", cost: [], damage: "", text: "Put 2 damage counters each of your opponent's Pokémon." },
      { name: "Spirit Scream", cost: [], damage: "", text: "Put damage counters on both Active Pokémon until the remaining HP of each Pokémon is 10." }
  ];
  public set: string = "XY";
  public name: string = "Gourgeist";
  public fullName: string = "Gourgeist XY 57";
  public text: string = "Gourgeist";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
