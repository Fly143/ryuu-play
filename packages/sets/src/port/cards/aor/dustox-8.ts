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

export class Dustox_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cascoon";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Δ Plus", powerType: PowerType.ABILITY, text: "If your opponent's Pokémon is Knocked Out by damage from an attack of this Pokémon, take 1 more Prize card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flap", cost: [], damage: "20", text: "" },
      { name: "Wind Shard", cost: [], damage: "", text: "This attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "AOR";
  public name: string = "Dustox";
  public fullName: string = "Dustox AOR 8";
  public text: string = "Dustox";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 50);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPrize:1");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "plusPrize:1");
    }
    return state;
  }
}
