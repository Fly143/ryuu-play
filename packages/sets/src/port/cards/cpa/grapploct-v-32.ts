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

export class GrapploctV_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tie Up", cost: [], damage: "20", text: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn." },
      { name: "Moonsault Press", cost: [], damage: "120+", text: "Flip a coin. If heads, this attack does 100 more damage." }
  ];
  public set: string = "CPA";
  public name: string = "Grapploct V";
  public fullName: string = "Grapploct V CPA 32";
  public text: string = "Grapploct V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 1);
    }
    return state;
  }
}
