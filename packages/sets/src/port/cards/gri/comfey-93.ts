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

export class Comfey_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flower Shield", powerType: PowerType.ABILITY, text: "Each of your Pokémon that has any Fairy Energy attached to it can't be affected by any Special Conditions. Remove any Special Conditions affecting those Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sweet Kiss", cost: [], damage: "30", text: "Your opponent draws a card." }
  ];
  public set: string = "GRI";
  public name: string = "Comfey";
  public fullName: string = "Comfey GRI 93";
  public text: string = "Comfey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
