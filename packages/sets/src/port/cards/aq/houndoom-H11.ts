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

export class HoundoomH11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Houndour";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fireworks", cost: [], damage: "30", text: "Flip a coin. If tails, discard a Fire Energy card attached to Houndoom." },
      { name: "Dark Impact", cost: [], damage: "40", text: "The Defending Pokémon can't use any Poké-Powers until the end of your opponent's next turn." }
  ];
  public set: string = "AQ";
  public name: string = "Houndoom";
  public fullName: string = "Houndoom AQ H11";
  public text: string = "Houndoom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
