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

export class StarmieBREAK_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Starmie";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Break Star", cost: [], damage: "", text: "This attack does 100 damage to each of your opponent's Pokémon BREAK. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "EVO";
  public name: string = "Starmie BREAK";
  public fullName: string = "Starmie BREAK EVO 32";
  public text: string = "Starmie BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 100);
    }
    return state;
  }
}
