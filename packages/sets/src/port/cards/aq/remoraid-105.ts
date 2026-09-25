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

export class Remoraid_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Splatter", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon is play. This attack does 10 damage to that Pokémon. Don't apply Weakness or Resistance for this attack." }
  ];
  public set: string = "AQ";
  public name: string = "Remoraid";
  public fullName: string = "Remoraid AQ 105";
  public text: string = "Remoraid";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
