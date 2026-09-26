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

export class BronzongBREAK_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bronzong";
  public hp: number = 130;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Metal Rain", cost: [], damage: "", text: "Discard as many Metal Energy attached to this Pokémon as you like. For each Energy card discarded in this way, choose 1 of your opponent's Pokémon and do 30 damage to it. Don't apply Weakness and Resistance. (You may choose the same Pokémon more than once.)" }
  ];
  public set: string = "FAC";
  public name: string = "Bronzong BREAK";
  public fullName: string = "Bronzong BREAK FAC 62";
  public text: string = "Bronzong BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
