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

export class Ursaring_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Teddiursa";
  public hp: number = 110;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Berserk", powerType: PowerType.ABILITY, text: "If Ursaring has any damage counters on it, each of Ursaring's attacks does 60 more damage (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hammer Arm", cost: [], damage: "30", text: "Discard the top card from your opponent's deck." },
      { name: "Megaton Lariat", cost: [], damage: "60", text: "" }
  ];
  public set: string = "UL";
  public name: string = "Ursaring";
  public fullName: string = "Ursaring UL 89";
  public text: string = "Ursaring";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
