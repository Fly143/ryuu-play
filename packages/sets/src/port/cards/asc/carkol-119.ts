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

export class Carkol_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rolycoly";
  public hp: number = 110;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Guard Press", cost: [], damage: "20", text: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance)." },
      { name: "Power Gem", cost: [], damage: "60", text: "" }
  ];
  public set: string = "ASC";
  public name: string = "Carkol";
  public fullName: string = "Carkol ASC 119";
  public text: string = "Carkol";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
