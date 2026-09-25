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

export class WashRotom_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Manual Wash", cost: [], damage: "20", text: "Heal 10 damage from each of your Pokémon." },
      { name: "Gadget Show", cost: [], damage: "30×", text: "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon." }
  ];
  public set: string = "DRI";
  public name: string = "Wash Rotom";
  public fullName: string = "Wash Rotom DRI 61";
  public text: string = "Wash Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
