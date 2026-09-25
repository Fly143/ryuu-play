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

export class Turtonator_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ring of Fire", cost: [], damage: "50", text: "Your opponent's Active Pokémon is now Burned. During your opponent's next turn, that Pokémon can't retreat." },
      { name: "Inferno Onrush", cost: [], damage: "180", text: "This Pokémon also does 60 damage to itself." }
  ];
  public set: string = "SCR";
  public name: string = "Turtonator";
  public fullName: string = "Turtonator SCR 25";
  public text: string = "Turtonator";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -60, 1);
    }
    return state;
  }
}
