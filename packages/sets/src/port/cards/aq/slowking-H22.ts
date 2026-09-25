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

export class SlowkingH22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bursting Hand", cost: [], damage: "10×", text: "Look at your opponent's hand. This attack does 10 damage times the number of Energy cards there." },
      { name: "Shuffle Attack", cost: [], damage: "40", text: "Look at a number of cards on top of your opponent's deck equal to the number of Energy cards attached to the Defending Pokémon. Put those cards in any order, and then put them back on top of your opponent's deck." }
  ];
  public set: string = "AQ";
  public name: string = "Slowking";
  public fullName: string = "Slowking AQ H22";
  public text: string = "Slowking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
