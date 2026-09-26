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

export class ZamazentaV_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 2.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Growl of the Shield", powerType: PowerType.ABILITY, text: "All of your Fighting Pokémon take 20 less damage from attacks from your opponent's Pokémon VMAX (after applying Weakness and Resistance). You can't apply more than 1 Growl of the Shield Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Heavy Impact", cost: [], damage: "150", text: "" }
  ];
  public set: string = "CEL";
  public name: string = "Zamazenta V";
  public fullName: string = "Zamazenta V CEL 18";
  public text: string = "Zamazenta V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 20);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:20");
    }
    return state;
  }
}
