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

export class Lopunny_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Buneary";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stompy Stomp", cost: [], damage: "40×", text: "Flip 2 coins. This attack does 40 damage for each heads." },
      { name: "Happy Turn", cost: [], damage: "60", text: "You may shuffle this Pokémon and all cards attached to it into your deck." }
  ];
  public set: string = "UPR";
  public name: string = "Lopunny";
  public fullName: string = "Lopunny UPR 107";
  public text: string = "Lopunny";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 40);
    }
    return state;
  }
}
