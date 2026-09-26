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

export class Dewgong_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seel";
  public hp: number = 80;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Freeze Lock", cost: [], damage: "20", text: "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to his or her Active Pokémon during his or her next turn." },
      { name: "Crushing Ice", cost: [], damage: "40+", text: "This attack does 40 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost. Damage is calculated using the Defending Pokémon's Retreat Cost after applying effects to the Retreat Cost." }
  ];
  public set: string = "SK";
  public name: string = "Dewgong";
  public fullName: string = "Dewgong SK 7";
  public text: string = "Dewgong";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
