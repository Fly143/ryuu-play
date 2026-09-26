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

export class MandibuzzBREAKXY182 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mandibuzz";
  public hp: number = 140;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wings of Disaster", cost: [], damage: "", text: "This attack does 20 damage to each of your opponent's Pokémon. Don't apply Weakness and Resistance. Discard all Pokémon Tool cards attached to each of your opponent's Pokémon." }
  ];
  public set: string = "PR-XY";
  public name: string = "Mandibuzz BREAK";
  public fullName: string = "Mandibuzz BREAK PR-XY XY182";
  public text: string = "Mandibuzz BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
