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

export class GreedentEx_179 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skwovet";
  public hp: number = 260;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Never Ever Enough", cost: [], damage: "", text: "Look at the top 3 cards of your deck. You may put those cards into your hand. If you don't, discard those cards and draw 3 cards." },
      { name: "Slip 'n' Roll", cost: [], damage: "210", text: "During your next turn, this Pokémon can't use Slip 'n' Roll." }
  ];
  public set: string = "OBF";
  public name: string = "Greedent ex";
  public fullName: string = "Greedent ex OBF 179";
  public text: string = "Greedent ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
