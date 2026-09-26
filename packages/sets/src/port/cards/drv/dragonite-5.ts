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

export class Dragonite_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dragonair";
  public hp: number = 150;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hyper Beam", cost: [], damage: "50", text: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon." },
      { name: "Hurricane Tail", cost: [], damage: "60×", text: "Flip 4 coins. This attack does 60 damage times the number of heads." }
  ];
  public set: string = "DRV";
  public name: string = "Dragonite";
  public fullName: string = "Dragonite DRV 5";
  public text: string = "Dragonite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 60);
    }
    return state;
  }
}
