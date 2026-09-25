import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class LatiosEx_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Link Wing", powerType: PowerType.ABILITY, text: "The Retreat Cost for each of your Latias, Latias ex, Latios, and Latios ex is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ice Barrier", cost: [], damage: "30", text: "Prevent all effects of attack, including damage, done to Latios ex by your opponent's Pokémon-ex during your opponent's next turn." },
      { name: "Hydro Splash", cost: [], damage: "60", text: "" }
  ];
  public set: string = "DF";
  public name: string = "Latios ex δ";
  public fullName: string = "Latios ex δ DF 96";
  public text: string = "Latios ex δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
