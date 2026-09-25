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

export class AlolanGolem_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Graveler";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electromagnetic Rock Wrecker", cost: [], damage: "80×", text: "Flip a coin for each Lightning Energy attached to this Pokémon. This attack does 80 damage for each heads." },
      { name: "Heavy Slam", cost: [], damage: "200-", text: "This attack does 30 less damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "GRI";
  public name: string = "Alolan Golem";
  public fullName: string = "Alolan Golem GRI 42";
  public text: string = "Alolan Golem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 80);
    }
    return state;
  }
}
