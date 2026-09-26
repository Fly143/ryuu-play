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

export class ErikaSOddish_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Photosynthesis", powerType: PowerType.ABILITY, text: "All Energy cards attached to Erika's Oddish provide Grass Energy instead of their usual type. This power works even while Erika's Oddish is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poisonpowder", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Poisoned." }
  ];
  public set: string = "G1";
  public name: string = "Erika's Oddish";
  public fullName: string = "Erika's Oddish G1 47";
  public text: string = "Erika's Oddish";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
