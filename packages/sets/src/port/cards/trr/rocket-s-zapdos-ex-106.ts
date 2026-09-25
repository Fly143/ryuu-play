import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
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

export class RocketSZapdosEx_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Darkness Guard", powerType: PowerType.ABILITY, text: "As long as Rocket's Zapdos ex has any Darkness Energy attached to it, damage done to Rocket's Zapdos ex by an opponent's attack is reduced by 10 (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Plasma", cost: [], damage: "10", text: "Search your discard pile for a Lightning Energy card and attach it to Rocket's Zapdos ex." },
      { name: "Raging Thunder", cost: [], damage: "60", text: "This attack does 30 damage to 1 of your Pokémon." }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Zapdos ex";
  public fullName: string = "Rocket's Zapdos ex TRR 106";
  public text: string = "Rocket's Zapdos ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 10);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:10");
    }
    return state;
  }
}
