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

export class ThievulGG17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nickit";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baffling", powerType: PowerType.ABILITY, text: "If your opponent has 2 or fewer Prize cards remaining, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Benched Pokémon V.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sharp Fang", cost: [], damage: "110", text: "" }
  ];
  public set: string = "CRZ";
  public name: string = "Thievul";
  public fullName: string = "Thievul CRZ GG17";
  public text: string = "Thievul";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
