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

export class Registeel_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Iron Head", cost: [], damage: "30×", text: "Flip a coin until you get tails. This attack does 30 damage times the number of heads." },
      { name: "Forbidden Iron Hammer", cost: [], damage: "70", text: "If your opponent's Active Pokémon is a Pokémon-EX, discard an Energy attached to that Pokémon." }
  ];
  public set: string = "BKT";
  public name: string = "Registeel";
  public fullName: string = "Registeel BKT 51";
  public text: string = "Registeel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
