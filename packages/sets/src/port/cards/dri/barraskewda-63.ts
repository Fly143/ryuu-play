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

export class Barraskewda_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Arrokuda";
  public hp: number = 130;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sharp Fin", cost: [], damage: "40", text: "" },
      { name: "Dive", cost: [], damage: "60", text: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon." }
  ];
  public set: string = "DRI";
  public name: string = "Barraskewda";
  public fullName: string = "Barraskewda DRI 63";
  public text: string = "Barraskewda";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
