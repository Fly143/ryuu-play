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

export class Gengar_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Haunter";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Life Shaker", powerType: PowerType.ABILITY, text: "As often as you like during your turn, you may move 1 damage counter from 1 of your Psychic Pokémon to another of your Psychic Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypnoblast", cost: [], damage: "90", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "SSH";
  public name: string = "Gengar";
  public fullName: string = "Gengar SSH 85";
  public text: string = "Gengar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
