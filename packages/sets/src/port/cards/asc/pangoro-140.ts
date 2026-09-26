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

export class Pangoro_140 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pancham";
  public hp: number = 140;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Corkscrew Punch", cost: [], damage: "40", text: "" },
      { name: "Master's Punch", cost: [], damage: "80+", text: "If any of your Benched Pancham have any damage counters on them, this attack does 120 more damage." }
  ];
  public set: string = "ASC";
  public name: string = "Pangoro";
  public fullName: string = "Pangoro ASC 140";
  public text: string = "Pangoro";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
