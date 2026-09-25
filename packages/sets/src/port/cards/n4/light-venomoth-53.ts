import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class LightVenomoth_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Venonat";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mysterious Wing", cost: [], damage: "", text: "Your opponent may choose a Baby Pokémon, Basic Pokémon, or Evolution card from his or her discard pile and put it into his or her hand. Either way, you may do the same." },
      { name: "Synchronize", cost: [], damage: "40", text: "If Light Venomoth and the Defending Pokémon have a different number of Energy cards attached to them, this attack does nothing." }
  ];
  public set: string = "N4";
  public name: string = "Light Venomoth";
  public fullName: string = "Light Venomoth N4 53";
  public text: string = "Light Venomoth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
