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

export class Lokix_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nymble";
  public hp: number = 120;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Low Kick", cost: [], damage: "30", text: "" },
      { name: "Jumping Shot", cost: [], damage: "150", text: "Shuffle this Pokémon and all attached cards into your deck." }
  ];
  public set: string = "PFL";
  public name: string = "Lokix";
  public fullName: string = "Lokix PFL 10";
  public text: string = "Lokix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
