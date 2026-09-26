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

export class BunnelbySWSH082 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mad Party", cost: [], damage: "20×", text: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack." }
  ];
  public set: string = "PR-SW";
  public name: string = "Bunnelby";
  public fullName: string = "Bunnelby PR-SW SWSH082";
  public text: string = "Bunnelby";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
