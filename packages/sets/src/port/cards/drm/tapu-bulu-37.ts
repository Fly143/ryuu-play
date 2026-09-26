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

export class TapuBulu_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Heavy Punch", cost: [], damage: "20×", text: "This attack does 20 damage for each of your opponent's Benched Pokémon." },
      { name: "Wild Tackle", cost: [], damage: "120", text: "Flip a coin. If tails, this Pokémon does 30 damage to itself." }
  ];
  public set: string = "DRM";
  public name: string = "Tapu Bulu";
  public fullName: string = "Tapu Bulu DRM 37";
  public text: string = "Tapu Bulu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
