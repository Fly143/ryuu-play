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

export class Sandslash_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sandshrew";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sand Swirl", cost: [], damage: "", text: "Does 20 damage to each Defending Pokémon. The Defending Pokémon can't retreat until the end of your opponent's next turn." },
      { name: "Earthquake", cost: [], damage: "60", text: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)" }
  ];
  public set: string = "SS";
  public name: string = "Sandslash";
  public fullName: string = "Sandslash SS 21";
  public text: string = "Sandslash";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
