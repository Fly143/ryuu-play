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

export class Cacturne_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cacnea";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Poison Payback", powerType: PowerType.ABILITY, text: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Feint Attack", cost: [], damage: "", text: "This attack does 50 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness, Resistance, or any other effects on that Pokémon." }
  ];
  public set: string = "CES";
  public name: string = "Cacturne";
  public fullName: string = "Cacturne CES 20";
  public text: string = "Cacturne";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 50);
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
