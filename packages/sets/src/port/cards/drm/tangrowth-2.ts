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

export class Tangrowth_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tangela";
  public hp: number = 140;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hefty Whip", cost: [], damage: "30+", text: "If this Pokémon was healed during this turn, this attack does 130 more damage." },
      { name: "Whip Smash", cost: [], damage: "110", text: "" }
  ];
  public set: string = "DRM";
  public name: string = "Tangrowth";
  public fullName: string = "Tangrowth DRM 2";
  public text: string = "Tangrowth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 130, 1);
    }
    return state;
  }
}
