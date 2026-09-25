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

export class Durant_128 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Knock Over", cost: [], damage: "20", text: "You may discard any Stadium card in play." },
      { name: "Mountain Munch", cost: [], damage: "", text: "Discard the top 2 cards of your opponent's deck." }
  ];
  public set: string = "DRM";
  public name: string = "Durant";
  public fullName: string = "Durant DRM 128";
  public text: string = "Durant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "discardStadium");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
