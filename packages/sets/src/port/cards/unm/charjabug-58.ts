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

export class Charjabug_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grubbin";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Battery", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may attach this card from your hand to 1 of your Vikavolt or Vikavolt-GX as a Special Energy card. This card provides 2 Lightning Energy only while it's attached to a Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pierce", cost: [], damage: "60", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Charjabug";
  public fullName: string = "Charjabug UNM 58";
  public text: string = "Charjabug";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
