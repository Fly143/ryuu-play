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

export class Hawlucha_127 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Showboating Pose", cost: [], damage: "", text: "Attach up to 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon." },
      { name: "Cross-Cut", cost: [], damage: "30+", text: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 30 more damage." }
  ];
  public set: string = "FST";
  public name: string = "Hawlucha";
  public fullName: string = "Hawlucha FST 127";
  public text: string = "Hawlucha";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    return state;
  }
}
