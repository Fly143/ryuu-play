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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Slowbro_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 100;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Airhead", powerType: PowerType.ABILITY, text: "If you have 2, 4, or 6 Prize Cards left, this Pokémon can't attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lazy Headbutt", cost: [], damage: "80", text: "This Pokémon is now Asleep." }
  ];
  public set: string = "DRX";
  public name: string = "Slowbro";
  public fullName: string = "Slowbro DRX 24";
  public text: string = "Slowbro";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
