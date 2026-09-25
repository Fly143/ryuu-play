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

export class CoalossalVMAX_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Coalossal V";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Eruption Shot", cost: [], damage: "40+", text: "Discard the top card of your deck. If that card is an Energy card, this attack does 90 more damage, and attach that card to this Pokémon." },
      { name: "G-Max Boulder", cost: [], damage: "240", text: "" }
  ];
  public set: string = "VIV";
  public name: string = "Coalossal VMAX";
  public fullName: string = "Coalossal VMAX VIV 99";
  public text: string = "Coalossal VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
