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

export class Oranguru_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Primate Acting", cost: [], damage: "", text: "Choose a Supporter card from your opponent's discard pile and use the effect of that card as the effect of this attack." },
      { name: "Hammer In", cost: [], damage: "70", text: "" }
  ];
  public set: string = "CRZ";
  public name: string = "Oranguru";
  public fullName: string = "Oranguru CRZ 119";
  public text: string = "Oranguru";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
