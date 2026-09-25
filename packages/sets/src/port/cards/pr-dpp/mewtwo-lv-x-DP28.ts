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

export class MewtwoLVXDP28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mewtwo";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psybarrier", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, including damage, done to Mewtwo by your opponent's Pokémon that isn't an Evolved Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Giga Burn", cost: [], damage: "120", text: "Discard all Energy attached to Mewtwo." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Mewtwo LV.X";
  public fullName: string = "Mewtwo LV.X PR-DPP DP28";
  public text: string = "Mewtwo LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
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
