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

export class BlaineSVulpix_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "10", text: "" },
      { name: "Call Will-o'-the-wisp", cost: [], damage: "", text: "Flip 3 coins. For each heads, if you have a Fire Energy card in your discard pile, put it into your hand." }
  ];
  public set: string = "G2";
  public name: string = "Blaine's Vulpix";
  public fullName: string = "Blaine's Vulpix G2 66";
  public text: string = "Blaine's Vulpix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
