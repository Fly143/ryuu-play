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

export class LaprasEx_164 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 2.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Power Splash", cost: [], damage: "40×", text: "This attack does 40 damage for each Energy attached to this Pokémon." },
      { name: "Larimar Rain", cost: [], damage: "", text: "Look at the top 20 cards of your deck and attach any number of Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck." }
  ];
  public set: string = "PR-SV";
  public name: string = "Lapras ex";
  public fullName: string = "Lapras ex PR-SV 164";
  public text: string = "Lapras ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
