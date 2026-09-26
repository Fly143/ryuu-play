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

export class HoopaEx_226 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Crush", cost: [], damage: "50×", text: "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon." },
      { name: "Bandit's Fist", cost: [], damage: "200", text: "During your next turn, this Pokémon can't use Bandit's Fist." }
  ];
  public set: string = "PAR";
  public name: string = "Hoopa ex";
  public fullName: string = "Hoopa ex PAR 226";
  public text: string = "Hoopa ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
