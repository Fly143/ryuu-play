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

export class Togepi_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Snivel", cost: [], damage: "", text: "If the Defending Pokémon attacks Togepi during your opponent's next turn, any damage done to Togepi is reduced by 20 (before applying Weakness and Resistance). (Benching either Pokémon ends this effect.)" },
      { name: "Mini-Metronome", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) (No matter what type the Defending Pokémon is, Togepi's type is still Colorless.) Togepi performs that attack." }
  ];
  public set: string = "BP";
  public name: string = "Togepi";
  public fullName: string = "Togepi BP 30";
  public text: string = "Togepi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* reduceDamageMarker:20 */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* copyAttack */ state;
    }
    return state;
  }
}
