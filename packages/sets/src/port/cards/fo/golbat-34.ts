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

export class Golbat_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zubat";
  public hp: number = 60;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wing Attack", cost: [], damage: "30", text: "" },
      { name: "Leech Life", cost: [], damage: "20", text: "Remove a number of damage counters from Golbat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Golbat has fewer damage counters than that, remove all of them." }
  ];
  public set: string = "FO";
  public name: string = "Golbat";
  public fullName: string = "Golbat FO 34";
  public text: string = "Golbat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAfterAttack(this, store, state, effect).use(effect, 0);
    }
    return state;
  }
}
