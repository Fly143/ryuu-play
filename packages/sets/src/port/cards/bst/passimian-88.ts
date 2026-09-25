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

export class Passimian_88 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Throwing Coach", powerType: PowerType.ABILITY, text: "Your Rapid Strike Pokémon's attacks do 30 more damage to your opponent's Benched Pokémon V and Benched Pokémon-GX (before applying Weakness and Resistance). You can't apply more than 1 Throwing Coach Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fling", cost: [], damage: "", text: "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "BST";
  public name: string = "Passimian";
  public fullName: string = "Passimian BST 88";
  public text: string = "Passimian";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPowerMarker:30");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "plusPowerMarker:30");
    }
    return state;
  }
}
