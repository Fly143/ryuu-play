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

export class Spritzee_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flail", cost: [], damage: "10×", text: "This attack does 10 damage times the number of damage counters on this Pokémon." }
  ];
  public set: string = "BKP";
  public name: string = "Spritzee";
  public fullName: string = "Spritzee BKP 105";
  public text: string = "Spritzee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesSelfCounters(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
