import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class DarkSlowbro_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Reel In", powerType: PowerType.ABILITY, text: "When you play Dark Slowbro from your hand, choose up to 3 Basic Pokémon and/or Evolution cards from your discard pile and put them into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fickle Attack", cost: [], damage: "40", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "G2";
  public name: string = "Dark Slowbro";
  public fullName: string = "Dark Slowbro G2 8";
  public text: string = "Dark Slowbro";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "recoverFromDiscard:3");
    }
    return state;
  }
}
