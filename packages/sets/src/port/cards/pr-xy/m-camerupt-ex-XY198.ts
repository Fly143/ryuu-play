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

export class MCameruptEXXY198 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Camerupt-EX";
  public hp: number = 230;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magma Eruption", cost: [], damage: "120+", text: "You may discard the top 3 cards of each player's deck. If you do, this attack does 40 more damage for each Energy card you discarded in this way." }
  ];
  public set: string = "PR-XY";
  public name: string = "M Camerupt-EX";
  public fullName: string = "M Camerupt-EX PR-XY XY198";
  public text: string = "M Camerupt-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
