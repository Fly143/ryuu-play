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

export class ScovillainEx_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Capsakid";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chili Snapper Bind", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Burned. During your opponent's next turn, that Pokémon can't retreat." },
      { name: "Two-Headed Crushing", cost: [], damage: "140", text: "Discard a random card from your opponent's hand. Discard the top card of your opponent's deck." }
  ];
  public set: string = "TEF";
  public name: string = "Scovillain ex";
  public fullName: string = "Scovillain ex TEF 22";
  public text: string = "Scovillain ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
