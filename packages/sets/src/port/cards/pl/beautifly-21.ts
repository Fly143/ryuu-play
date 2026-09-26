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

export class Beautifly_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Silcoon";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Colorful Powder", cost: [], damage: "20+", text: "If Beautifly has 2 or less Energy attached to it, the Defending Pokémon is now Poisoned. If Beautifly has 3 Energy attached to it, the Defending Pokémon is now Burned and Poisoned. If Beautifly has 4 or more Energy attached to it, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Asleep, Burned, and Poisoned." },
      { name: "Silver Scale", cost: [], damage: "30", text: "If the Defending Pokémon has any Resistance, this attack's base damage is 60 damage instead of 30." }
  ];
  public set: string = "PL";
  public name: string = "Beautifly";
  public fullName: string = "Beautifly PL 21";
  public text: string = "Beautifly";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.poisonDefending(this, store, state, effect).use(effect);
    }
    return state;
  }
}
