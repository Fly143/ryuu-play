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

export class MarowakBREAK_79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Marowak";
  public hp: number = 140;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bone Revenge", cost: [], damage: "20+", text: "This attack does 40 more damage for each Prize card your opponent has taken." }
  ];
  public set: string = "BKP";
  public name: string = "Marowak BREAK";
  public fullName: string = "Marowak BREAK BKP 79";
  public text: string = "Marowak BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerPrize(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
