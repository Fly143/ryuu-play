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

export class Stonjourner_111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Power Stone", cost: [], damage: "", text: "Attach up to 2 Fighting Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Lost Shot", cost: [], damage: "120", text: "Put the top card of your opponent's deck in the Lost Zone." }
  ];
  public set: string = "ASR";
  public name: string = "Stonjourner";
  public fullName: string = "Stonjourner ASR 111";
  public text: string = "Stonjourner";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
