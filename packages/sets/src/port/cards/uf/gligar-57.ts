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

export class Gligar_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Free Flight", powerType: PowerType.ABILITY, text: "If Gligar has no Energy cards attached to it, Gligar's Retreat Cost is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Toxic Grip", cost: [], damage: "10", text: "The Defending Pokémon is now Poisoned." }
  ];
  public set: string = "UF";
  public name: string = "Gligar";
  public fullName: string = "Gligar UF 57";
  public text: string = "Gligar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
