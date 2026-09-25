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

export class Onix_562 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Healer", powerType: PowerType.ABILITY, text: "Whenever you attach an Energy card from your hand to Onix, remove a damage counter from Onix.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Boundless Power", cost: [], damage: "80", text: "Onix can't attack during your next turn." }
  ];
  public set: string = "UL";
  public name: string = "Onix";
  public fullName: string = "Onix UL 56";
  public text: string = "Onix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
