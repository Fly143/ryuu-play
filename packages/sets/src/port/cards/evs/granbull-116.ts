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

export class Granbull_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snubbull";
  public hp: number = 120;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dig Up", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put up to 2 Pokémon Tool cards from your discard pile into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "90", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Granbull";
  public fullName: string = "Granbull EVS 116";
  public text: string = "Granbull";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
