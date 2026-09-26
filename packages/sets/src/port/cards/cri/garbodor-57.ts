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

export class Garbodor_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Trubbish";
  public hp: number = 140;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gloomy Garbage", powerType: PowerType.ABILITY, text: "Attacks used by your opponent's Active Pokémon that has a Pokémon Tool attached do 20 less damage (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sludge Bomb", cost: [], damage: "100", text: "" }
  ];
  public set: string = "CRI";
  public name: string = "Garbodor";
  public fullName: string = "Garbodor CRI 57";
  public text: string = "Garbodor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
