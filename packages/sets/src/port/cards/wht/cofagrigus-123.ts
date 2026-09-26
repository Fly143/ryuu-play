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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Cofagrigus_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yamask";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Extended Damagriiigus", cost: [], damage: "", text: "Move all damage counters from 1 of your Benched Pokémon to 1 of your opponent's Pokémon." },
      { name: "Perplex", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "WHT";
  public name: string = "Cofagrigus";
  public fullName: string = "Cofagrigus WHT 123";
  public text: string = "Cofagrigus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
