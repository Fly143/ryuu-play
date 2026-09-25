import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class VirizionEX_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Verdant Wind", powerType: PowerType.ABILITY, text: "Each of your Pokémon that has any Grass Energy attached to it can't be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Emerald Slash", cost: [], damage: "50", text: "You may search your deck for 2 Grass Energy cards and attach them to 1 of your Benched Pokémon. Shuffle your deck afterward." }
  ];
  public set: string = "FFI";
  public name: string = "Virizion-EX";
  public fullName: string = "Virizion-EX FFI 9";
  public text: string = "Virizion-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
