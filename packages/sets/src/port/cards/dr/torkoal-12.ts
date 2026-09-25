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

export class Torkoal_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Power Generation", cost: [], damage: "", text: "Search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them into your hand." },
      { name: "Scorching Smoke", cost: [], damage: "", text: "The Defending Pokémon is now Burned. Flip a coin. If tails, discard a Fire Energy card attached to Torkoal." }
  ];
  public set: string = "DR";
  public name: string = "Torkoal";
  public fullName: string = "Torkoal DR 12";
  public text: string = "Torkoal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
