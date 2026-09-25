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

export class AurorusEXXY102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Frozen Charm", powerType: PowerType.ABILITY, text: "Each of your Pokémon that has any Water Energy attached to it can't be Paralyzed. (If any of those Pokémon are Paralyzed, remove that Special Condition.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crystal Breath", cost: [], damage: "160", text: "This Pokémon can't attack during your next turn." }
  ];
  public set: string = "PR-XY";
  public name: string = "Aurorus-EX";
  public fullName: string = "Aurorus-EX PR-XY XY102";
  public text: string = "Aurorus-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
