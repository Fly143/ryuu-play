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

export class Muk_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grimer";
  public hp: number = 130;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sludge Street", powerType: PowerType.ABILITY, text: "The Retreat Cost of your opponent's Poisoned Pokémon is Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shrieking Poison", cost: [], damage: "90", text: "Your opponent's Active Pokémon is now Confused and Poisoned." }
  ];
  public set: string = "FST";
  public name: string = "Muk";
  public fullName: string = "Muk FST 85";
  public text: string = "Muk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
