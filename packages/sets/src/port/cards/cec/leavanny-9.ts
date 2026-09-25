import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
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

export class Leavanny_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swadloon";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blanket Weaver", powerType: PowerType.ABILITY, text: "Your Grass Pokémon take 40 less damage from your opponent's attacks (after applying Weakness and Resistance). You can't apply more than 1 Blanket Weaver Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Razor Leaf", cost: [], damage: "70", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Leavanny";
  public fullName: string = "Leavanny CEC 9";
  public text: string = "Leavanny";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 40);
    }
    return state;
  }
}
