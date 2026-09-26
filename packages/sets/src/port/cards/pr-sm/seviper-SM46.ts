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

export class SeviperSM46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 2.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "More Poison", powerType: PowerType.ABILITY, text: "Put 1 more damage counter on your opponent's Poisoned Pokémon between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Venomous Fang", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Poisoned." }
  ];
  public set: string = "PR-SM";
  public name: string = "Seviper";
  public fullName: string = "Seviper PR-SM SM46";
  public text: string = "Seviper";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
