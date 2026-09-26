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

export class Magnemite_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magnetic Catch", cost: [], damage: "", text: "Shuffle up to 3 Metal Energy cards from your discard pile into your deck." },
      { name: "Rolling Attack", cost: [], damage: "30", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Magnemite";
  public fullName: string = "Magnemite BRS 105";
  public text: string = "Magnemite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
