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

export class Dusknoir_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dusclops";
  public hp: number = 150;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spectral Breach", powerType: PowerType.ABILITY, text: "All Special Energy attached to Pokémon (both yours and your opponent's) provide Colorless Energy and have no other effect.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spooky Shot", cost: [], damage: "120", text: "" }
  ];
  public set: string = "VIV";
  public name: string = "Dusknoir";
  public fullName: string = "Dusknoir VIV 71";
  public text: string = "Dusknoir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
