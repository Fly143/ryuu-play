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

export class Mothim_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Burmy";
  public hp: number = 90;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cloak Party", cost: [], damage: "", text: "Search your deck for up to 3 in any combination of Burmy and Wormadam, show them to your opponent, and put them into your hand. Shuffle your deck afterward." },
      { name: "Energy Assist", cost: [], damage: "30", text: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon." }
  ];
  public set: string = "AR";
  public name: string = "Mothim";
  public fullName: string = "Mothim AR 6";
  public text: string = "Mothim";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
