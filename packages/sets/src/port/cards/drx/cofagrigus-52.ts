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

export class Cofagrigus_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yamask";
  public hp: number = 100;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chuck", cost: [], damage: "40×", text: "Discard as many Pokémon Tool cards as you like from your hand. This attack does 40 damage times the number of cards you discarded." },
      { name: "Lock Up", cost: [], damage: "40", text: "The Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "DRX";
  public name: string = "Cofagrigus";
  public fullName: string = "Cofagrigus DRX 52";
  public text: string = "Cofagrigus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
