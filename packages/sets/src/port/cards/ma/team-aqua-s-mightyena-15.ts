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

export class TeamAquaSMightyena_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Poochyena";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "20", text: "" },
      { name: "Mystic Fang", cost: [], damage: "50", text: "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Confused." }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Mightyena";
  public fullName: string = "Team Aqua's Mightyena MA 15";
  public text: string = "Team Aqua's Mightyena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
