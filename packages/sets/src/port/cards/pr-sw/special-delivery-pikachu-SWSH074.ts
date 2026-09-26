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

export class SpecialDeliveryPikachuSWSH074 extends PokemonCard {
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
      { name: "Happy Delivery", cost: [], damage: "", text: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Electro Ball", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Special Delivery Pikachu";
  public fullName: string = "Special Delivery Pikachu PR-SW SWSH074";
  public text: string = "Special Delivery Pikachu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
