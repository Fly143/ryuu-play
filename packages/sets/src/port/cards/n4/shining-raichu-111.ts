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

export class ShiningRaichu_111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Thundersquall", cost: [], damage: "40", text: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to that Pokémon for each Water Energy attached to Shining Raichu. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "N4";
  public name: string = "Shining Raichu";
  public fullName: string = "Shining Raichu N4 111";
  public text: string = "Shining Raichu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
