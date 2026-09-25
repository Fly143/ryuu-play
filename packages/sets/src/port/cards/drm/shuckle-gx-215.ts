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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ShuckleGX_215 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Protective Shell", powerType: PowerType.ABILITY, text: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have 2 or fewer Energy attached to them.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Triple Poison", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns." },
      { name: "Wrap-GX", cost: [], damage: "40", text: "Your opponent's Active Pokémon is now Paralyzed. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "DRM";
  public name: string = "Shuckle-GX";
  public fullName: string = "Shuckle-GX DRM 215";
  public text: string = "Shuckle-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPreventEffects");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPreventEffects");
    }
    return state;
  }
}
