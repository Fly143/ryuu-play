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

export class LtSurgeSMagneton_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lt. Surge's Magnemite";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Charge", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), if Lt. Surge's Magneton is your Active Pokémon, you may take 1 Lightning Energy card attached to 1 of your Pokémon and attach it to Lt. Surge's Magneton. This power can't be used if Lt. Surge's Magneton is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mega Shock", cost: [], damage: "50", text: "Flip a coin. If tails, Lt. Surge's Magneton does 20 damage to itself." }
  ];
  public set: string = "G1";
  public name: string = "Lt. Surge's Magneton";
  public fullName: string = "Lt. Surge's Magneton G1 8";
  public text: string = "Lt. Surge's Magneton";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
