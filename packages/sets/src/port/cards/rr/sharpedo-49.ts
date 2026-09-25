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

export class Sharpedo_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Carvanha";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Shark", powerType: PowerType.ABILITY, text: "If Sharpedo is your Active Pokémon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), flip a coin. If heads, discard an Energy card attached to the Attacking Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crunch", cost: [], damage: "20", text: "If an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage to that Pokémon until the end of your next turn." },
      { name: "Sharp Fang", cost: [], damage: "60", text: "" }
  ];
  public set: string = "RR";
  public name: string = "Sharpedo";
  public fullName: string = "Sharpedo RR 49";
  public text: string = "Sharpedo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "roughSkin");
    }
    return state;
  }
}
