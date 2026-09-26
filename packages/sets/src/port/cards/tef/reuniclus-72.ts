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

export class Reuniclus_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Duosion";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Summoning Gate", cost: [], damage: "", text: "Look at the top 8 cards of your deck. You may put any number of Pokémon you find there onto your Bench. Shuffle the other cards back into your deck." },
      { name: "Brain Shake", cost: [], damage: "100", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "TEF";
  public name: string = "Reuniclus";
  public fullName: string = "Reuniclus TEF 72";
  public text: string = "Reuniclus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
