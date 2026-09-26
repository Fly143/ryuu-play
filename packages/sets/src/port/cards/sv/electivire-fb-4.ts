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

export class ElectivireFB_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dump and Draw", cost: [], damage: "", text: "Discard up to 2 Energy cards from your hand. For each card you discarded, draw 2 cards." },
      { name: "Electric Current", cost: [], damage: "40", text: "Move a Lightning Energy card attached to Electivire FB to 1 of your Benched Pokémon." }
  ];
  public set: string = "SV";
  public name: string = "Electivire FB";
  public fullName: string = "Electivire FB SV 4";
  public text: string = "Electivire FB";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
