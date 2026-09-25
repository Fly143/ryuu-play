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

export class Swirlix_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lick Away", cost: [], damage: "", text: "Remove all Special Conditions from this Pokémon." },
      { name: "Tackle", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PHF";
  public name: string = "Swirlix";
  public fullName: string = "Swirlix PHF 68";
  public text: string = "Swirlix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.clearSpecialConditions(this, store, state, effect).use(effect);
    }
    return state;
  }
}
