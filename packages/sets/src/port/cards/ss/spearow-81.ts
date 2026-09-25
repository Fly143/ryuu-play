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

export class Spearow_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Super Speed", cost: [], damage: "", text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Spearow during your opponent's next turn." },
      { name: "Peck", cost: [], damage: "10", text: "" }
  ];
  public set: string = "SS";
  public name: string = "Spearow";
  public fullName: string = "Spearow SS 81";
  public text: string = "Spearow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
