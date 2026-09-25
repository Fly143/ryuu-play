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

export class Qwilfish_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Poison Point", powerType: PowerType.ABILITY, text: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Venoshock", cost: [], damage: "10+", text: "If your opponent's Active Pokémon is Poisoned, this attack does 60 more damage." }
  ];
  public set: string = "SSH";
  public name: string = "Qwilfish";
  public fullName: string = "Qwilfish SSH 51";
  public text: string = "Qwilfish";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "poisonPoint");
    }
    return state;
  }
}
