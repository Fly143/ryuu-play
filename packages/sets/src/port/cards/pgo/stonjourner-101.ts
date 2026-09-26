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

export class Stonjourner_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rock Throw", cost: [], damage: "20", text: "" },
      { name: "Mystery Press", cost: [], damage: "60+", text: "If you have no Supporter cards in your discard pile, this attack does 130 more damage." }
  ];
  public set: string = "PGO";
  public name: string = "Stonjourner";
  public fullName: string = "Stonjourner PGO 101";
  public text: string = "Stonjourner";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 130, 1);
    }
    return state;
  }
}
