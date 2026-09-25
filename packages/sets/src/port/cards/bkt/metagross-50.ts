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

export class Metagross_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metang";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "θ Double", powerType: PowerType.ABILITY, text: "This Pokémon may have up to 2 Pokémon Tool cards attached to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Machine Gun Stomp", cost: [], damage: "20+", text: "This attack does 10 more damage for each card in your hand." },
      { name: "Guard Press", cost: [], damage: "80", text: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance)." }
  ];
  public set: string = "BKT";
  public name: string = "Metagross";
  public fullName: string = "Metagross BKT 50";
  public text: string = "Metagross";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "toolSlots:2");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "toolSlots:2");
    }
    return state;
  }
}
