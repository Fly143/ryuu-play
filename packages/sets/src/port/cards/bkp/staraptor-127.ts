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

export class Staraptor_127 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Staravia";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cyclone Slash", cost: [], damage: "70", text: "Before doing damage, have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon." },
      { name: "Brave Bird", cost: [], damage: "120", text: "This Pokémon does 20 damage to itself." }
  ];
  public set: string = "BKP";
  public name: string = "Staraptor";
  public fullName: string = "Staraptor BKP 127";
  public text: string = "Staraptor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -20, 1);
    }
    return state;
  }
}
