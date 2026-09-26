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

export class Barbaracle_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Binacle";
  public hp: number = 130;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lost Block", powerType: PowerType.ABILITY, text: "Your opponent puts any Prize cards they would take in the Lost Zone instead of into their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dynamic Chop", cost: [], damage: "100", text: "" }
  ];
  public set: string = "ASR";
  public name: string = "Barbaracle";
  public fullName: string = "Barbaracle ASR 107";
  public text: string = "Barbaracle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
