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

export class LeafeonEx_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Verdant Storm", cost: [], damage: "60×", text: "This attack does 60 damage for each Energy attached to all of your opponent's Pokémon." },
      { name: "Moss Agate", cost: [], damage: "230", text: "Heal 100 damage from each of your Benched Pokémon." }
  ];
  public set: string = "PRE";
  public name: string = "Leafeon ex";
  public fullName: string = "Leafeon ex PRE 6";
  public text: string = "Leafeon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 100);
    }
    return state;
  }
}
