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

export class Ariados_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spinarak";
  public hp: number = 80;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sticky", powerType: PowerType.ABILITY, text: "The Retreat Cost for each player's Pokémon (excluding Ariados) is Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Offensive Needle", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "MT";
  public name: string = "Ariados";
  public fullName: string = "Ariados MT 20";
  public text: string = "Ariados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
