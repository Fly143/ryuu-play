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

export class Persian_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meowth";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Thick Skin", powerType: PowerType.ABILITY, text: "Persian can't be affected by any Special Conditions.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Claws", cost: [], damage: "", text: "The Defending Pokémon is now Poisoned." },
      { name: "Shining Claws", cost: [], damage: "30", text: "The Defending Pokémon is now Confused." }
  ];
  public set: string = "RG";
  public name: string = "Persian";
  public fullName: string = "Persian RG 44";
  public text: string = "Persian";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "immuneToSpecial");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "immuneToSpecial");
    }
    return state;
  }
}
