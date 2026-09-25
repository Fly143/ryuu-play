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

export class UmbreonEX_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Veil of Darkness", cost: [], damage: "20", text: "Discard as many cards as you like from your hand. Then, draw that many cards." },
      { name: "Endgame", cost: [], damage: "70", text: "If your opponent's Mega Evolution Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards." }
  ];
  public set: string = "FAC";
  public name: string = "Umbreon-EX";
  public fullName: string = "Umbreon-EX FAC 55";
  public text: string = "Umbreon-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
