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

export class LtSurgeSEevee_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Surprise", cost: [], damage: "", text: "Look at a random card from your opponent's hand. Your opponent shuffles that card into his or her deck." },
      { name: "Scratch", cost: [], damage: "20", text: "" }
  ];
  public set: string = "G2";
  public name: string = "Lt. Surge's Eevee";
  public fullName: string = "Lt. Surge's Eevee G2 51";
  public text: string = "Lt. Surge's Eevee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
