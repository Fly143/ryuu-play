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

export class ScizorEx_195 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Scyther";
  public hp: number = 270;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Steel Wing", cost: [], damage: "70", text: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance)." },
      { name: "Cross Breaker", cost: [], damage: "120×", text: "Discard up to 2 Metal Energy from this Pokémon. This attack does 120 damage for each card you discarded in this way." }
  ];
  public set: string = "TEF";
  public name: string = "Scizor ex";
  public fullName: string = "Scizor ex TEF 195";
  public text: string = "Scizor ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
