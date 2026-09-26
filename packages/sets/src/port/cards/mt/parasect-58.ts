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

export class Parasect_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Paras";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wild Spores", cost: [], damage: "20", text: "If Parasect evolved from Paras during this turn, this attack does 40 damage and the Defending Pokémon is now Asleep and Poisoned." },
      { name: "Extend Fungus", cost: [], damage: "60", text: "Remove 2 damage counters from Parasect." }
  ];
  public set: string = "MT";
  public name: string = "Parasect";
  public fullName: string = "Parasect MT 58";
  public text: string = "Parasect";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
