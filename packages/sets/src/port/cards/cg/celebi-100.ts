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

export class Celebi_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Time Travel", powerType: PowerType.ABILITY, text: "If Celebi Star would be Knocked Out by damage from an opponent's attack, you may flip a coin. If heads, Celebi Star is not Knocked Out, discard all cards attached to Celebi Star, and put Celebi Star on the bottom of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Leaf Shade", cost: [], damage: "", text: "Count the amount of Energy attached to Celebi Star. Put that many damage counters on 1 of your opponent's Pokémon." }
  ];
  public set: string = "CG";
  public name: string = "Celebi ★";
  public fullName: string = "Celebi ★ CG 100";
  public text: string = "Celebi ★";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
