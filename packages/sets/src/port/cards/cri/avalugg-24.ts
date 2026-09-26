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

export class Avalugg_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bergmite";
  public hp: number = 160;
    public height?: number = 2.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Iceberg Breaker", cost: [], damage: "60×", text: "Discard the top 6 cards of your deck, and this attack does 60 damage for each Basic Water Energy card you discarded in this way." },
      { name: "Frost Stamp", cost: [], damage: "160", text: "" }
  ];
  public set: string = "CRI";
  public name: string = "Avalugg";
  public fullName: string = "Avalugg CRI 24";
  public text: string = "Avalugg";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 6);
    }
    return state;
  }
}
