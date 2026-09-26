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

export class Weepinbell_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bellsprout";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Poisonpowder", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Poisoned." },
      { name: "Razor Leaf", cost: [], damage: "30", text: "" }
  ];
  public set: string = "BS2";
  public name: string = "Weepinbell";
  public fullName: string = "Weepinbell BS2 48";
  public text: string = "Weepinbell";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
