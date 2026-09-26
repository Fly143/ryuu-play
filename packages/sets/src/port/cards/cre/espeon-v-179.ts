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

export class EspeonV_179 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Zen Shot", cost: [], damage: "", text: "This attack does 60 damage to 1 of your opponent's Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Super Psy Bolt", cost: [], damage: "120", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Espeon V";
  public fullName: string = "Espeon V CRE 179";
  public text: string = "Espeon V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
