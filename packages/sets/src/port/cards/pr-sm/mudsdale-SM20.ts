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

export class MudsdaleSM20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mudbray";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Enhanced Stomp", cost: [], damage: "60+", text: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 60 more damage." },
      { name: "High Horsepower", cost: [], damage: "180", text: "This Pokémon does 40 damage to itself." }
  ];
  public set: string = "PR-SM";
  public name: string = "Mudsdale";
  public fullName: string = "Mudsdale PR-SM SM20";
  public text: string = "Mudsdale";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
