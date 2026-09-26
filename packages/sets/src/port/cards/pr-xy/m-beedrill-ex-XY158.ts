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

export class MBeedrillEXXY158 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Beedrill-EX";
  public hp: number = 200;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hazard Stinger", cost: [], damage: "40", text: "Discard all Energy attached to this Pokémon. Your opponent's Active Pokémon is now Paralyzed and Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns." }
  ];
  public set: string = "PR-XY";
  public name: string = "M Beedrill-EX";
  public fullName: string = "M Beedrill-EX PR-XY XY158";
  public text: string = "M Beedrill-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
