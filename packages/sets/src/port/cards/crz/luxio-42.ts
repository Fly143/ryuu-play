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

export class Luxio_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shinx";
  public hp: number = 90;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shorting Spark", cost: [], damage: "", text: "This attack does 90 damage to each of your opponent's Pokémon that has a Pokémon Tool attached. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Bite", cost: [], damage: "40", text: "" }
  ];
  public set: string = "CRZ";
  public name: string = "Luxio";
  public fullName: string = "Luxio CRZ 42";
  public text: string = "Luxio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 90);
    }
    return state;
  }
}
