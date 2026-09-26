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

export class Klefki_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Key of Secrets", powerType: PowerType.ABILITY, text: "Each of your Metal Pokémon's Resistance is now -40.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ram", cost: [], damage: "30", text: "" }
  ];
  public set: string = "UNB";
  public name: string = "Klefki";
  public fullName: string = "Klefki UNB 110";
  public text: string = "Klefki";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
