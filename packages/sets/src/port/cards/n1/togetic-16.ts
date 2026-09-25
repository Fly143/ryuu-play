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
import { commonEffects } from '../../../common';

export class Togetic_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Togepi";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Super Metronome", cost: [], damage: "", text: "Flip a coin. If heads, choose an attack on 1 of your opponent's Pokémon. Super Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) (No matter what type the Defending Pokémon is, Togetic's type is still Colorless.) Togetic performs that attack. (Togetic can make that attack even if it does not have the appropriate number or type of Energy attached to it necessary to make the attack.)" },
      { name: "Fly", cost: [], damage: "30", text: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Togetic; if tails, this attack does nothing (not even damage)." }
  ];
  public set: string = "N1";
  public name: string = "Togetic";
  public fullName: string = "Togetic N1 16";
  public text: string = "Togetic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* copyAttack */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
