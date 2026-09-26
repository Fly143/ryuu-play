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

export class Kingler_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Krabby";
  public hp: number = 80;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Body Slam", cost: [], damage: "30", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." },
      { name: "Prop-up Pinchers", cost: [], damage: "40+", text: "If Kingler has a Pokémon Tool card attached to it, this attack does 40 damage plus 40 more damage." }
  ];
  public set: string = "CG";
  public name: string = "Kingler δ";
  public fullName: string = "Kingler δ CG 22";
  public text: string = "Kingler δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
