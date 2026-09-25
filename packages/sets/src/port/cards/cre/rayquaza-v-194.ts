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

export class RayquazaV_194 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dragon Pulse", cost: [], damage: "40", text: "Discard the top 2 cards of your deck." },
      { name: "Spiral Burst", cost: [], damage: "20+", text: "You may discard up to 2 basic Fire Energy or up to 2 basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way." }
  ];
  public set: string = "CRE";
  public name: string = "Rayquaza V";
  public fullName: string = "Rayquaza V CRE 194";
  public text: string = "Rayquaza V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 0);
    }
    return state;
  }
}
