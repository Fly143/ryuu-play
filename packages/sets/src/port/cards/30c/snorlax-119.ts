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

export class Snorlax_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Good Sleep", powerType: PowerType.ABILITY, text: "If this Pokémon remains Asleep during Pokémon Checkup, heal all damage from this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Collapse", cost: [], damage: "130", text: "This Pokémon is now Asleep." }
  ];
  public set: string = "30C";
  public name: string = "Snorlax";
  public fullName: string = "Snorlax 30C 119";
  public text: string = "Snorlax";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
