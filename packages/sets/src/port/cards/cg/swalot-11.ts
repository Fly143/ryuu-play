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

export class Swalot_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gulpin";
  public hp: number = 80;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pick and Choose", cost: [], damage: "", text: "Choose either Burned or Poisoned, and either Asleep or Confused. The Defending Pokémon is now affected by both Special Conditions." },
      { name: "Reactive Poison", cost: [], damage: "50+", text: "Does 50 damage plus 20 more damage for each Special Condition affecting the Defending Pokémon." }
  ];
  public set: string = "CG";
  public name: string = "Swalot";
  public fullName: string = "Swalot CG 11";
  public text: string = "Swalot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    return state;
  }
}
