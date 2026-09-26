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

export class OricorioSWSH168 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lesson in Zeal", powerType: PowerType.ABILITY, text: "All of your Fusion Strike Pokémon take 20 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). You can't apply more than 1 Lesson in Zeal Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Glistening Droplets", cost: [], damage: "", text: "Put 5 damage counters on your opponent's Pokémon in any way you like." }
  ];
  public set: string = "PR-SW";
  public name: string = "Oricorio";
  public fullName: string = "Oricorio PR-SW SWSH168";
  public text: string = "Oricorio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 50);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 20);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:20");
    }
    return state;
  }
}
