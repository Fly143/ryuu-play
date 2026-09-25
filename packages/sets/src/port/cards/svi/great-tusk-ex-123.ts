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

export class GreatTuskEx_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 250;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bedrock Breaker", cost: [], damage: "40", text: "Discard a Stadium in play." },
      { name: "Gigantic Tusks", cost: [], damage: "250", text: "This Pokémon also does 50 damage to itself." }
  ];
  public set: string = "SVI";
  public name: string = "Great Tusk ex";
  public fullName: string = "Great Tusk ex SVI 123";
  public text: string = "Great Tusk ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
