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

export class Rillaboom_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Thwackey";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drum Beating", cost: [], damage: "60", text: "During your opponent's next turn, attacks used by the Defending Pokémon cost Colorless more, and its Retreat Cost is Colorless more." },
      { name: "Wood Hammer", cost: [], damage: "180", text: "This Pokémon also does 50 damage to itself." }
  ];
  public set: string = "TWM";
  public name: string = "Rillaboom";
  public fullName: string = "Rillaboom TWM 16";
  public text: string = "Rillaboom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
