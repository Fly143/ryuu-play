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

export class RhyperiorLVX_145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rhyperior";
  public hp: number = 170;
    public height?: number = 2.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hard Crush", cost: [], damage: "50×", text: "Discard the top 5 cards from your deck. This attack does 50 damage for each Energy card you discarded." },
      { name: "Upthrow", cost: [], damage: "60", text: "Search your discard pile for all Fighting Energy cards, show them to your opponent, and shuffle them into your deck." }
  ];
  public set: string = "SF";
  public name: string = "Rhyperior LV.X";
  public fullName: string = "Rhyperior LV.X SF 145";
  public text: string = "Rhyperior LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
