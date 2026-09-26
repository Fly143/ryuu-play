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

export class Latias_153 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Arrow", cost: [], damage: "20×", text: "This attack does 20 damage times the amount of Energy attached to 1 of your opponent's Pokémon to that Pokémon. This damage isn't affected by Weakness or Resistance." },
      { name: "Speed Wing", cost: [], damage: "100", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Latias";
  public fullName: string = "Latias CEC 153";
  public text: string = "Latias";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
