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

export class Armaldo_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Anorith";
  public hp: number = 150;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rushing Water", cost: [], damage: "40", text: "Move an Energy from your opponent's Active Pokémon to 1 of his or her Benched Pokémon." },
      { name: "Guard Claw", cost: [], damage: "100", text: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance)." }
  ];
  public set: string = "STS";
  public name: string = "Armaldo";
  public fullName: string = "Armaldo STS 57";
  public text: string = "Armaldo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
