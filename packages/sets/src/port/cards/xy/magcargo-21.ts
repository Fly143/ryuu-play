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

export class Magcargo_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slugma";
  public hp: number = 110;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magma Mantle", cost: [], damage: "30+", text: "You may discard the top card of your deck. If that card is a Fire Energy card, this attack does 50 more damage." },
      { name: "Heat Blast", cost: [], damage: "80", text: "" }
  ];
  public set: string = "XY";
  public name: string = "Magcargo";
  public fullName: string = "Magcargo XY 21";
  public text: string = "Magcargo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    return state;
  }
}
