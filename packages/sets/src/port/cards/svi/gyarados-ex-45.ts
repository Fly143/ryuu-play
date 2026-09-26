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

export class GyaradosEx_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magikarp";
  public hp: number = 300;
    public height?: number = 6.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Waterfall", cost: [], damage: "100", text: "" },
      { name: "Tyrannical Tail", cost: [], damage: "180+", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 180 more damage." }
  ];
  public set: string = "SVI";
  public name: string = "Gyarados ex";
  public fullName: string = "Gyarados ex SVI 45";
  public text: string = "Gyarados ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 180, 1);
    }
    return state;
  }
}
