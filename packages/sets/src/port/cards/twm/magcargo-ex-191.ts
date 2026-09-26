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

export class MagcargoEx_191 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slugma";
  public hp: number = 270;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hot Magma", cost: [], damage: "70", text: "Your opponent's Active Pokémon is now Burned." },
      { name: "Ground Burn", cost: [], damage: "140+", text: "Discard the top card of each player's deck. This attack does 140 more damage for each Energy card discarded in this way." }
  ];
  public set: string = "TWM";
  public name: string = "Magcargo ex";
  public fullName: string = "Magcargo ex TWM 191";
  public text: string = "Magcargo ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 140, 0);
    }
    return state;
  }
}
