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

export class Slaking_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vigoroth";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lazy Paunch", powerType: PowerType.ABILITY, text: "If Slaking used any attacks during your last turn, Slaking can't attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Best Dash", cost: [], damage: "150", text: "During your opponent's next turn, any damage done to Slaking by attacks is increased by 50 (after applying Weakness and Resistance)." }
  ];
  public set: string = "PL";
  public name: string = "Slaking";
  public fullName: string = "Slaking PL 16";
  public text: string = "Slaking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
