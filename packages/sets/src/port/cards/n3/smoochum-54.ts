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

export class Smoochum_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psykiss", cost: [], damage: "", text: "Flip a coin. If heads, choose a Special Energy card attached to 1 of your opponent's Pokémon. Your opponent shuffles that card into his or her deck." }
  ];
  public set: string = "N3";
  public name: string = "Smoochum";
  public fullName: string = "Smoochum N3 54";
  public text: string = "Smoochum";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
