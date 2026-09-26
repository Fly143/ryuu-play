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

export class MistySPoliwhirl_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misty's Poliwag";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rapids", cost: [], damage: "20", text: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and discard it." },
      { name: "Water Punch", cost: [], damage: "30+", text: "Flip a number of coins equal to the number of Water Energy attached to Misty's Poliwhirl. This attack does 30 damage plus 10 damage for each heads." }
  ];
  public set: string = "G1";
  public name: string = "Misty's Poliwhirl";
  public fullName: string = "Misty's Poliwhirl G1 53";
  public text: string = "Misty's Poliwhirl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
