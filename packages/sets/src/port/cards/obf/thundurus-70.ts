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

export class Thundurus_70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Adverse Weather", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, prevent all damage done to your Benched Pokémon by attacks from your opponent's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gigantic Bolt", cost: [], damage: "140", text: "This Pokémon also does 90 damage to itself." }
  ];
  public set: string = "OBF";
  public name: string = "Thundurus";
  public fullName: string = "Thundurus OBF 70";
  public text: string = "Thundurus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 90);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
