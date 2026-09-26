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

export class Piloswine_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swinub";
  public hp: number = 100;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sheer Cold", cost: [], damage: "20", text: "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn." },
      { name: "Tonnage", cost: [], damage: "60+", text: "You may do 60 damage plus 40 more damage. If you do, Piloswine does 30 damage to itself." }
  ];
  public set: string = "TRR";
  public name: string = "Piloswine";
  public fullName: string = "Piloswine TRR 13";
  public text: string = "Piloswine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
