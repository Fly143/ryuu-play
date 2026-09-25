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

export class HisuianBraviary_132 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rufflet";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psywave", cost: [], damage: "30×", text: "This attack does 30 damage for each Energy attached to your opponent's Active Pokémon." },
      { name: "Slashing Strike", cost: [], damage: "120", text: "During your next turn, this Pokémon can't use Slashing Strike." }
  ];
  public set: string = "BRS";
  public name: string = "Hisuian Braviary";
  public fullName: string = "Hisuian Braviary BRS 132";
  public text: string = "Hisuian Braviary";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
