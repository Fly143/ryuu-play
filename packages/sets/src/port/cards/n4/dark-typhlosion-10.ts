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

export class DarkTyphlosion_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Quilava";
  public hp: number = 80;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Claw Swipe", cost: [], damage: "20", text: "" },
      { name: "Rushing Flames", cost: [], damage: "40×", text: "You may discard any number of Fire Energy cards attached to your Pokémon. Flip a coin for each Fire Energy card discarded in this way. This attack does 40 damage times the number of heads." }
  ];
  public set: string = "N4";
  public name: string = "Dark Typhlosion";
  public fullName: string = "Dark Typhlosion N4 10";
  public text: string = "Dark Typhlosion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
