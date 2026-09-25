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

export class Darmanitan_352 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Darumaka";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rolling Tackle", cost: [], damage: "60", text: "" },
      { name: "Inferno Onrush", cost: [], damage: "210", text: "This Pokémon also does 70 damage to itself." }
  ];
  public set: string = "TWM";
  public name: string = "Darmanitan";
  public fullName: string = "Darmanitan TWM 35";
  public text: string = "Darmanitan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 70);
    }
    return state;
  }
}
