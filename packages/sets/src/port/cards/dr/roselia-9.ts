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

export class Roselia_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Thick Skin", powerType: PowerType.ABILITY, text: "Roselia can't be affected by any Special Conditions.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Speed Growth", cost: [], damage: "", text: "Attach up to 2 Grass Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Sleep Powder", cost: [], damage: "10", text: "The Defending Pokémon is now Asleep." }
  ];
  public set: string = "DR";
  public name: string = "Roselia";
  public fullName: string = "Roselia DR 9";
  public text: string = "Roselia";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
