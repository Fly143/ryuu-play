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

export class Wobbuffet_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Safeguard", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, including damage, done to Wobbuffet by your opponent's Pokémon-ex.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flip Over", cost: [], damage: "50", text: "Wobbuffet does 10 damage to itself, and don't apply Weakness and Resistance to this damage." }
  ];
  public set: string = "PK";
  public name: string = "Wobbuffet";
  public fullName: string = "Wobbuffet PK 24";
  public text: string = "Wobbuffet";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
