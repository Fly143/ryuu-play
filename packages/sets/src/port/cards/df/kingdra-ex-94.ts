import {
  Effect,
  State,
  StoreLike,
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

export class KingdraEx_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seadra";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Extra Smoke", powerType: PowerType.ABILITY, text: "Any damage done to your Stage 2 Pokémon-ex by your opponent's attacks is reduced by 10 (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Link", cost: [], damage: "40", text: "Search your discard pile for an Energy card and attach it to Kingdra ex." },
      { name: "Protective Swirl", cost: [], damage: "80", text: "Kingdra ex has no Weakness during your opponent's next turn." }
  ];
  public set: string = "DF";
  public name: string = "Kingdra ex δ";
  public fullName: string = "Kingdra ex δ DF 94";
  public text: string = "Kingdra ex δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 10);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:10");
    }
    return state;
  }
}
