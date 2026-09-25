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

export class ZekromEx_166 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slash", cost: [], damage: "50", text: "" },
      { name: "Voltage Burst", cost: [], damage: "130+", text: "This attack does 50 more damage for each Prize card your opponent has taken. This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "BLK";
  public name: string = "Zekrom ex";
  public fullName: string = "Zekrom ex BLK 166";
  public text: string = "Zekrom ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerPrize(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
