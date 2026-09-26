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

export class Bewear_150 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Stufful";
  public hp: number = 140;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hammer Arm", cost: [], damage: "90", text: "Discard the top card of your opponent's deck." },
      { name: "Big Throw", cost: [], damage: "", text: "Flip a coin. If heads, discard your opponent's Active Pokémon and all attached cards." }
  ];
  public set: string = "RCL";
  public name: string = "Bewear";
  public fullName: string = "Bewear RCL 150";
  public text: string = "Bewear";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
