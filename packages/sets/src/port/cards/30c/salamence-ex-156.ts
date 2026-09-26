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

export class SalamenceEx_156 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shelgon";
  public hp: number = 330;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Booming Call", cost: [], damage: "", text: "Put up to 3 Dragon Pokémon from your discard pile onto your Bench." },
      { name: "Dragon Pulse", cost: [], damage: "240", text: "Discard the top 2 cards of your deck." }
  ];
  public set: string = "30C";
  public name: string = "Salamence ex";
  public fullName: string = "Salamence ex 30C 156";
  public text: string = "Salamence ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscardToBench");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
