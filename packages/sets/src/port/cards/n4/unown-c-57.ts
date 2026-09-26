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

export class UnownC_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "[Chase]", powerType: PowerType.ABILITY, text: "As long as Unown [C] is your Active Pokémon, whenever your opponent's Active Pokémon tries to retreat, flip a coin. If heads, put 1 damage counter on that Pokémon. Apply Weakness and Resistance.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "10", text: "" }
  ];
  public set: string = "N4";
  public name: string = "Unown [C]";
  public fullName: string = "Unown [C] N4 57";
  public text: string = "Unown [C]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
