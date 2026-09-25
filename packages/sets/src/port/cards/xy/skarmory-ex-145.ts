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

export class SkarmoryEX_145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Joust", cost: [], damage: "30", text: "Before doing damage, discard all Pokémon Tool cards attached to your opponent's Active Pokémon." },
      { name: "Tailspin Piledriver", cost: [], damage: "80+", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 40 more damage." }
  ];
  public set: string = "XY";
  public name: string = "Skarmory-EX";
  public fullName: string = "Skarmory-EX XY 145";
  public text: string = "Skarmory-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 1);
    }
    return state;
  }
}
