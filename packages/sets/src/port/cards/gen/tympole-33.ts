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

export class Tympole_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Get Loud", cost: [], damage: "10", text: "" },
      { name: "Round", cost: [], damage: "10×", text: "This attack does 10 damage times the number of your Pokémon in play that have the Round attack." }
  ];
  public set: string = "GEN";
  public name: string = "Tympole";
  public fullName: string = "Tympole GEN 33";
  public text: string = "Tympole";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
