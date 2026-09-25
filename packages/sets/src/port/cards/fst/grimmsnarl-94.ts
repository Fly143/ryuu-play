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

export class Grimmsnarl_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Morgrem";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Longhair Shot", cost: [], damage: "", text: "This attack does 30 damage to 1 of your opponent's Pokémon for each Darkness Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Darkness Fang", cost: [], damage: "110", text: "" }
  ];
  public set: string = "FST";
  public name: string = "Grimmsnarl";
  public fullName: string = "Grimmsnarl FST 94";
  public text: string = "Grimmsnarl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
