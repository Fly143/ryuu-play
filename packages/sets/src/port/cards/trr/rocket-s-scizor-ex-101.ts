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

export class RocketSScizorEx_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rocket's Scyther ex";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dual Armor", powerType: PowerType.ABILITY, text: "As long as Rocket's Scizor ex has any Metal Energy attached to it, Rocket's Scizor ex is both Darkness and Metal type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rotating Claws", cost: [], damage: "50", text: "You may discard an Energy card attached to Rocket's Scizor ex. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Rocket's Scizor ex." }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Scizor ex";
  public fullName: string = "Rocket's Scizor ex TRR 101";
  public text: string = "Rocket's Scizor ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
