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

export class BanetteTG07 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shuppet";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Resolute Spite", cost: [], damage: "20×", text: "Put up to 7 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way." },
      { name: "Eerie Light", cost: [], damage: "50", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "LOR";
  public name: string = "Banette";
  public fullName: string = "Banette LOR TG07";
  public text: string = "Banette";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
