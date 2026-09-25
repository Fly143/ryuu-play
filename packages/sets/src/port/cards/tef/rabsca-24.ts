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

export class Rabsca_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rellor";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spherical Shield", powerType: PowerType.ABILITY, text: "Prevent all damage from and effects of attacks from your opponent's Pokémon done to your Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic", cost: [], damage: "10+", text: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "TEF";
  public name: string = "Rabsca";
  public fullName: string = "Rabsca TEF 24";
  public text: string = "Rabsca";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
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
