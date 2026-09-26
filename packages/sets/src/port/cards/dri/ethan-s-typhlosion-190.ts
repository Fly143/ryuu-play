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

export class EthanSTyphlosion_190 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ethan's Quilava";
  public hp: number = 170;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Buddy Blast", cost: [], damage: "40+", text: "This attack does 60 more damage for each Ethan's Adventure card in your discard pile." },
      { name: "Steam Artillery", cost: [], damage: "160", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Ethan's Typhlosion";
  public fullName: string = "Ethan's Typhlosion DRI 190";
  public text: string = "Ethan's Typhlosion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 0);
    }
    return state;
  }
}
