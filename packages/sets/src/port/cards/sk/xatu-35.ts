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

export class Xatu_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Natu";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Synchronicity", powerType: PowerType.ABILITY, text: "You may attach any Technical Machine to Xatu.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Warp Hole", cost: [], damage: "30", text: "Flip a coin. If heads, choose a card from your discard pile and put it on top of your deck." }
  ];
  public set: string = "SK";
  public name: string = "Xatu";
  public fullName: string = "Xatu SK 35";
  public text: string = "Xatu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
