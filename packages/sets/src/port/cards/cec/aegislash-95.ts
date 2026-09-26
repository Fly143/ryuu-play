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

export class Aegislash_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Doublade";
  public hp: number = 130;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Durable Blade", powerType: PowerType.ABILITY, text: "If this Pokémon is Knocked Out by damage from an opponent's attack, put it into your hand instead of the discard pile. (Discard all cards attached to it.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Trash Slash", cost: [], damage: "10×", text: "This attack does 10 damage for each Item card in your discard pile. You can't do more than 130 damage in this way." }
  ];
  public set: string = "CEC";
  public name: string = "Aegislash";
  public fullName: string = "Aegislash CEC 95";
  public text: string = "Aegislash";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesDiscardPokemon:10");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.discardEnergySelfPower(this, store, state, effect).reduce(effect.power, 99);
    }
    return state;
  }
}
