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

export class Carvanha_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rough Skin", powerType: PowerType.ABILITY, text: "If Carvanha is your Active Pokémon and is damaged by an opponent's attack (even if Carvanha is Knocked Out), put 1 damage counter on the Attacking Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gnaw", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PK";
  public name: string = "Carvanha";
  public fullName: string = "Carvanha PK 47";
  public text: string = "Carvanha";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "roughSkin");
    }
    return state;
  }
}
