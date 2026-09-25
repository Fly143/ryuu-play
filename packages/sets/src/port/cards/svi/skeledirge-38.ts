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

export class Skeledirge_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Crocalor";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Passionate Singing", cost: [], damage: "50", text: "Attach up to 2 Basic Energy cards from your discard pile to your Pokémon in any way you like." },
      { name: "Blazing Shout", cost: [], damage: "190", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "SVI";
  public name: string = "Skeledirge";
  public fullName: string = "Skeledirge SVI 38";
  public text: string = "Skeledirge";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
