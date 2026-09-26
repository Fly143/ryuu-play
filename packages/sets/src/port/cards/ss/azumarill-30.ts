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

export class Azumarill_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Marill";
  public hp: number = 70;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drizzle", cost: [], damage: "", text: "If you have Water Energy cards in your hand, attach as many Water Energy cards as you like to any of your Active Pokémon." },
      { name: "Max Bubbles", cost: [], damage: "30×", text: "Flip a coin for each Energy attached to all of your Active Pokémon. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "SS";
  public name: string = "Azumarill";
  public fullName: string = "Azumarill SS 30";
  public text: string = "Azumarill";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
