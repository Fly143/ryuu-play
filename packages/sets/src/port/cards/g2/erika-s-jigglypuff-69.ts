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

export class ErikaSJigglypuff_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Group Therapy", cost: [], damage: "", text: "You and your opponent remove 1 damage counter from each of your Pokémon with damage counters on them." },
      { name: "Pulled Punch", cost: [], damage: "40-", text: "If the Defending Pokémon has no damage counters on it, this attack does 40 damage. If it has any damage counters on it, this attack does 10 damage." }
  ];
  public set: string = "G2";
  public name: string = "Erika's Jigglypuff";
  public fullName: string = "Erika's Jigglypuff G2 69";
  public text: string = "Erika's Jigglypuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
