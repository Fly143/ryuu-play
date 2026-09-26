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

export class Illumise_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slowing Perfume", cost: [], damage: "", text: "You can use this attack only if you go second, and only during your first turn. Shuffle 1 of your opponent's Benched Pokémon and all attached cards into their deck." },
      { name: "Glide", cost: [], damage: "30", text: "" }
  ];
  public set: string = "TWM";
  public name: string = "Illumise";
  public fullName: string = "Illumise TWM 10";
  public text: string = "Illumise";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
