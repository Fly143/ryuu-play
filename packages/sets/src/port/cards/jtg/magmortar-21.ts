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

export class Magmortar_212 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magmar";
  public hp: number = 130;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magma Surge", powerType: PowerType.ABILITY, text: "During Pokémon Checkup, put 3 more damage counters on your opponent's Burned Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Searing Flame", cost: [], damage: "90", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "JTG";
  public name: string = "Magmortar";
  public fullName: string = "Magmortar JTG 21";
  public text: string = "Magmortar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
