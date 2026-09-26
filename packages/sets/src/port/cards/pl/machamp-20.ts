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

export class Machamp_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machoke";
  public hp: number = 130;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Take Out", cost: [], damage: "40", text: "If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon is Knocked Out instead of damaged by this attack." },
      { name: "Hurricane Punch", cost: [], damage: "30×", text: "Flip 4 coins. This attack does 30 damage times the number of heads." },
      { name: "Rage", cost: [], damage: "60+", text: "Does 60 damage plus 10 more damage for each damage counter on Machamp." }
  ];
  public set: string = "PL";
  public name: string = "Machamp";
  public fullName: string = "Machamp PL 20";
  public text: string = "Machamp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
