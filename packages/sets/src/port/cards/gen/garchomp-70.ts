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

export class Garchomp_70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gabite";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Turbo Assault", cost: [], damage: "60", text: "Attach an Energy card from your discard pile to 1 of your Pokémon." },
      { name: "Bite Off", cost: [], damage: "80+", text: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 80 more damage." }
  ];
  public set: string = "GEN";
  public name: string = "Garchomp";
  public fullName: string = "Garchomp GEN 70";
  public text: string = "Garchomp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    return state;
  }
}
