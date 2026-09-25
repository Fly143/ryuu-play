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

export class EnteiSL3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Extreme Speed", powerType: PowerType.ABILITY, text: "Entei's Retreat Cost is Colorless Energy less for each Fire Energy attached to Entei.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wild Blaze", cost: [], damage: "70", text: "Discard the top 3 cards of your deck." }
  ];
  public set: string = "CL";
  public name: string = "Entei";
  public fullName: string = "Entei CL SL3";
  public text: string = "Entei";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
