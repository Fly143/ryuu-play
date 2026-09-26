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

export class RayquazaDeoxysLEGEND_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 140;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Space Virus", powerType: PowerType.ABILITY, text: "If your opponent's Pokémon is Knocked Out by damage from an attack of Rayquaza & Deoxys LEGEND, take 1 more Prize card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ozone Buster", cost: [], damage: "150", text: "Discard all Fire Energy attached to Rayquaza & Deoxys LEGEND." }
  ];
  public set: string = "UD";
  public name: string = "Rayquaza & Deoxys LEGEND";
  public fullName: string = "Rayquaza & Deoxys LEGEND UD 90";
  public text: string = "Rayquaza & Deoxys LEGEND";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPrize:1");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "plusPrize:1");
    }
    return state;
  }
}
