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

export class Sharpedo_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Carvanha";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rough Skin", powerType: PowerType.ABILITY, text: "If Sharpedo is your Active Pokémon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), put 2 damage counters on the Attacking Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Strike Wound", cost: [], damage: "60+", text: "If the Defending Pokémon has 2 or more damage counters on it, this attack does 60 damage plus 20 more damage. This attack damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon." }
  ];
  public set: string = "SW";
  public name: string = "Sharpedo";
  public fullName: string = "Sharpedo SW 37";
  public text: string = "Sharpedo";

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
