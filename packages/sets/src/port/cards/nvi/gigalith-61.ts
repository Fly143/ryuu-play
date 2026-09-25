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

export class Gigalith_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Boldore";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Core Cannon", cost: [], damage: "", text: "This attack does 20 damage to 1 of your opponent's Pokémon for each Fighting Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Power Gem", cost: [], damage: "90", text: "" }
  ];
  public set: string = "NVI";
  public name: string = "Gigalith";
  public fullName: string = "Gigalith NVI 61";
  public text: string = "Gigalith";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
