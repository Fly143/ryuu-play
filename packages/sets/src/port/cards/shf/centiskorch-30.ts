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

export class Centiskorch_302 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sizzlipede";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Overheater", powerType: PowerType.ABILITY, text: "Whenever your opponent flips a coin for their Burned Pokémon during Pokémon Checkup, it doesn't recover from that Special Condition even if the result is heads.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bursting Inferno", cost: [], damage: "130", text: "Your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "SHF";
  public name: string = "Centiskorch";
  public fullName: string = "Centiskorch SHF 30";
  public text: string = "Centiskorch";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
