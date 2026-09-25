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

export class Gallade_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kirlia";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nerve Shot", cost: [], damage: "30", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." },
      { name: "Pandemonium Blade", cost: [], damage: "60+", text: "Does 20 more damage for each of your Benched Pokémon that has any damage counters on it." }
  ];
  public set: string = "PHF";
  public name: string = "Gallade";
  public fullName: string = "Gallade PHF 81";
  public text: string = "Gallade";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerDamagedBench:20");
    }
    return state;
  }
}
