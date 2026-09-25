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

export class Forretress_140 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pineco";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Iron Shake-Up", cost: [], damage: "20", text: "You may move any amount of Metal Energy from your Pokémon to your other Pokémon in any way you like." },
      { name: "Hurricane of Needles", cost: [], damage: "80×", text: "Flip 4 coins. This attack does 80 damage for each heads." }
  ];
  public set: string = "DRI";
  public name: string = "Forretress";
  public fullName: string = "Forretress DRI 140";
  public text: string = "Forretress";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 80);
    }
    return state;
  }
}
