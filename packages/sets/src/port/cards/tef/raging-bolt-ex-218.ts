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

export class RagingBoltEx_218 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 240;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Burst Roar", cost: [], damage: "", text: "Discard your hand and draw 6 cards." },
      { name: "Bellowing Thunder", cost: [], damage: "70×", text: "You may discard any amount of Basic Energy from your Pokémon. This attack does 70 damage for each card you discarded in this way." }
  ];
  public set: string = "TEF";
  public name: string = "Raging Bolt ex";
  public fullName: string = "Raging Bolt ex TEF 218";
  public text: string = "Raging Bolt ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
