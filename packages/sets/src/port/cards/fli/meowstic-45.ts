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

export class Meowstic_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Espurr";
  public hp: number = 90;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Teleportation Burst", cost: [], damage: "20", text: "Switch this Pokémon with 1 of your Benched Pokémon." },
      { name: "Psychic", cost: [], damage: "30+", text: "This attack does 30 more damage times the amount of Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "FLI";
  public name: string = "Meowstic";
  public fullName: string = "Meowstic FLI 45";
  public text: string = "Meowstic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    return state;
  }
}
