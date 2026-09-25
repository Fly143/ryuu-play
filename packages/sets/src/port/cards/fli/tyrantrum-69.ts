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

export class Tyrantrum_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tyrunt";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tyrannical Heart", powerType: PowerType.ABILITY, text: "As long as you don't have more Pokémon in play than your opponent, this Pokémon's attacks do 60 more damage (before applying Weakness and Resistance), and it takes 30 less damage from attacks (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crunch", cost: [], damage: "100", text: "Discard an Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "FLI";
  public name: string = "Tyrantrum";
  public fullName: string = "Tyrantrum FLI 69";
  public text: string = "Tyrantrum";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 30);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:30");
    }
    return state;
  }
}
