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

export class IncineroarEx_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Torracat";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hustle Play", powerType: PowerType.ABILITY, text: "Attacks used by this Pokémon cost Colorless less for each of your opponent's Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Blaze Blast", cost: [], damage: "240", text: "Your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "TEF";
  public name: string = "Incineroar ex";
  public fullName: string = "Incineroar ex TEF 34";
  public text: string = "Incineroar ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
