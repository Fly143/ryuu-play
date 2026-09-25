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

export class BloodmoonUrsalunaEx_168 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Seasoned Skill", powerType: PowerType.ABILITY, text: "Blood Moon used by this Pokémon costs Colorless less for each Prize card your opponent has taken.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Blood Moon", cost: [], damage: "240", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "PRE";
  public name: string = "Bloodmoon Ursaluna ex";
  public fullName: string = "Bloodmoon Ursaluna ex PRE 168";
  public text: string = "Bloodmoon Ursaluna ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
