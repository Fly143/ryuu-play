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

export class HoOhBREAKXY154 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ho-Oh";
  public hp: number = 150;
    public height?: number = 3.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shining Flame", cost: [], damage: "160", text: "This Pokémon can't use Shining Flame during your next turn." }
  ];
  public set: string = "PR-XY";
  public name: string = "Ho-Oh BREAK";
  public fullName: string = "Ho-Oh BREAK PR-XY XY154";
  public text: string = "Ho-Oh BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
