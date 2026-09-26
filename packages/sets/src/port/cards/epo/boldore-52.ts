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

export class Boldore_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Roggenrola";
  public hp: number = 90;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Headbutt", cost: [], damage: "30", text: "" },
      { name: "Hard Crash", cost: [], damage: "60+", text: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself." }
  ];
  public set: string = "EPO";
  public name: string = "Boldore";
  public fullName: string = "Boldore EPO 52";
  public text: string = "Boldore";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    return state;
  }
}
