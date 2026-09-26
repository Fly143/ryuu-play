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

export class Starmie_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Staryu";
  public hp: number = 70;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Confuse Ray", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Confused." },
      { name: "Core Stream", cost: [], damage: "", text: "Choose an Energy type other than Colorless. This attack does 20 damage to each of your opponent's Pokémon with any Energy cards of that type attached to it. Don't apply Weakness and Resistance." }
  ];
  public set: string = "N3";
  public name: string = "Starmie";
  public fullName: string = "Starmie N3 25";
  public text: string = "Starmie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
