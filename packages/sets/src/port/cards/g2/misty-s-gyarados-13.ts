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

export class MistySGyarados_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misty's Magikarp";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rebellion", powerType: PowerType.ABILITY, text: "Whenever Misty's Gyarados attacks, flip 2 coins. If both of them are tails, that attack does nothing. Instead, shuffle Misty's Gyarados and all cards attached to it into your deck. (This power works even if Misty's Gyarados is Confused.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tidal Wave", cost: [], damage: "70", text: "" }
  ];
  public set: string = "G2";
  public name: string = "Misty's Gyarados";
  public fullName: string = "Misty's Gyarados G2 13";
  public text: string = "Misty's Gyarados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
