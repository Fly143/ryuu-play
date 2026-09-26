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

export class PikachuSWSH234 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gift Delivery", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Pika Ball", cost: [], damage: "50", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Pikachu";
  public fullName: string = "Pikachu PR-SW SWSH234";
  public text: string = "Pikachu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
