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

export class Probopass_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nosepass";
  public hp: number = 140;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magnetic Tension", cost: [], damage: "", text: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 40 damage to the new Active Pokémon." },
      { name: "Iron Tackle", cost: [], damage: "120", text: "This Pokémon also does 20 damage to itself." }
  ];
  public set: string = "FST";
  public name: string = "Probopass";
  public fullName: string = "Probopass FST 99";
  public text: string = "Probopass";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
