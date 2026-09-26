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

export class Ursaring_122 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Teddiursa";
  public hp: number = 130;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drag Off", cost: [], damage: "", text: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. This attack does 50 damage to the new Active Pokémon." },
      { name: "Swing Around", cost: [], damage: "80+", text: "Flip 2 coins. This attack does 40 more damage for each heads." }
  ];
  public set: string = "BKP";
  public name: string = "Ursaring";
  public fullName: string = "Ursaring BKP 122";
  public text: string = "Ursaring";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 0);
    }
    return state;
  }
}
