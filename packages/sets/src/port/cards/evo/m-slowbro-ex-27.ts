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

export class MSlowbroEX_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowbro-EX";
  public hp: number = 220;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Loll Roll Spin", cost: [], damage: "100+", text: "This Pokémon is now Confused. During your next turn, this Pokémon's Loll Roll Spin attack does 100 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "EVO";
  public name: string = "M Slowbro-EX";
  public fullName: string = "M Slowbro-EX EVO 27";
  public text: string = "M Slowbro-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
