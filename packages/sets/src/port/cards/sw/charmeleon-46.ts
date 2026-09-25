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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Charmeleon_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmander";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fire Fang", cost: [], damage: "20", text: "The Defending Pokémon is now Burned." },
      { name: "Flare Tail", cost: [], damage: "50+", text: "Flip a coin. If heads, discard a Fire Energy attached to Charmeleon and this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "SW";
  public name: string = "Charmeleon";
  public fullName: string = "Charmeleon SW 46";
  public text: string = "Charmeleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
