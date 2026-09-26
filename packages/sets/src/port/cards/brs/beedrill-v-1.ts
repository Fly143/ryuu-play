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

export class BeedrillV_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Twineedle", cost: [], damage: "40×", text: "Flip 2 coins. This attack does 40 damage for each heads." },
      { name: "Swarming Sting", cost: [], damage: "", text: "This attack does 50 damage to 1 of your opponent's Pokémon for each of your Beedrill V in play. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "BRS";
  public name: string = "Beedrill V";
  public fullName: string = "Beedrill V BRS 1";
  public text: string = "Beedrill V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 40);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
