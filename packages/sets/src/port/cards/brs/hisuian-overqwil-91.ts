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

export class HisuianOverqwil_91 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hisuian Qwilfish";
  public hp: number = 130;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dirty Press", cost: [], damage: "30+", text: "If you have at least 3 Darkness Energy in play, this attack does 90 more damage." },
      { name: "Pierce", cost: [], damage: "70", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Hisuian Overqwil";
  public fullName: string = "Hisuian Overqwil BRS 91";
  public text: string = "Hisuian Overqwil";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
