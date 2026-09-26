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

export class Toxicroak_124 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Croagunk";
  public hp: number = 110;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "More Poison", powerType: PowerType.ABILITY, text: "Put 2 more damage counters on your opponent's Poisoned Pokémon during Pokémon Checkup.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Claws", cost: [], damage: "70", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned." }
  ];
  public set: string = "SSH";
  public name: string = "Toxicroak";
  public fullName: string = "Toxicroak SSH 124";
  public text: string = "Toxicroak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
