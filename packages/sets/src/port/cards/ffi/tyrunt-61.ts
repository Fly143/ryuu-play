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

export class Tyrunt_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Jaw Fossil";
  public hp: number = 90;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gnaw", cost: [], damage: "30", text: "" },
      { name: "Crunch", cost: [], damage: "50", text: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "FFI";
  public name: string = "Tyrunt";
  public fullName: string = "Tyrunt FFI 61";
  public text: string = "Tyrunt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsDiscardEnergyOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
