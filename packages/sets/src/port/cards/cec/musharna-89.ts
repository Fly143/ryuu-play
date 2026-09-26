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

export class Musharna_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Munna";
  public hp: number = 100;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rest Well", cost: [], damage: "", text: "Both Active Pokémon are now Asleep. During your next turn, this Pokémon's attacks do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." },
      { name: "Zen Headbutt", cost: [], damage: "50", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Musharna";
  public fullName: string = "Musharna CEC 89";
  public text: string = "Musharna";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialBoth(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 100);
    }
    return state;
  }
}
