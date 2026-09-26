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

export class Shuckle_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pot Shell", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, including damage, done to Shuckle by your opponent's Pokémon that has any Special Energy cards attached to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ferment Poison", cost: [], damage: "10", text: "The Defending Pokémon is now Poisoned. As long as the Defending Pokémon remains Poisoned by this attack, it can't use any Poké-Body." }
  ];
  public set: string = "SW";
  public name: string = "Shuckle";
  public fullName: string = "Shuckle SW 109";
  public text: string = "Shuckle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
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
