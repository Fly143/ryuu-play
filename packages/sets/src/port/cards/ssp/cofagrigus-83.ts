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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Cofagrigus_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yamask";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Law of the Underworld", cost: [], damage: "", text: "Put 6 damage counters on each Pokémon that has an Ability (both yours and your opponent's)." },
      { name: "Spooky Shot", cost: [], damage: "100", text: "" }
  ];
  public set: string = "SSP";
  public name: string = "Cofagrigus";
  public fullName: string = "Cofagrigus SSP 83";
  public text: string = "Cofagrigus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
