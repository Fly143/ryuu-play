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

export class Ninetales_202 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vulpix";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Supernatural Shapeshifter", cost: [], damage: "", text: "Discard the top card of your deck, and if that card is a Supporter card, use the effect of that card as the effect of this attack." },
      { name: "Combustion", cost: [], damage: "60", text: "" }
  ];
  public set: string = "MEG";
  public name: string = "Ninetales";
  public fullName: string = "Ninetales MEG 20";
  public text: string = "Ninetales";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
