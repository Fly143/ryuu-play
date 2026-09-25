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

export class LightLedian_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ledyba";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flash Touch", cost: [], damage: "", text: "If you have any Benched Pokémon, switch 1 of them with Light Ledian. As long as that Pokémon is your Active Pokémon, it can't become Asleep, Confused, Paralyzed, or Poisoned. (All other effects of attacks, Pokémon Powers, and Trainer cards still happen.)" },
      { name: "Comet Punch", cost: [], damage: "20×", text: "Flip 4 coins. This attack does 20 damage times the number of heads." }
  ];
  public set: string = "N4";
  public name: string = "Light Ledian";
  public fullName: string = "Light Ledian N4 24";
  public text: string = "Light Ledian";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 20);
    }
    return state;
  }
}
