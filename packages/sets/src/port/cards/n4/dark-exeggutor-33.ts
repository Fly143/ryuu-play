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

export class DarkExeggutor_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Triple Headbutt", cost: [], damage: "10×", text: "Flip 3 coins. This attack does 10 damage times the number of heads." },
      { name: "MAX Burst", cost: [], damage: "20×", text: "Flip a number of coins equal to the number of Energy cards attached to your opponent's Pokémon. This attack does 20 damage times the number of heads." }
  ];
  public set: string = "N4";
  public name: string = "Dark Exeggutor";
  public fullName: string = "Dark Exeggutor N4 33";
  public text: string = "Dark Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 8, 20);
    }
    return state;
  }
}
