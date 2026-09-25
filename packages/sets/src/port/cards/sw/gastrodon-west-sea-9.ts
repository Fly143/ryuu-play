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

export class GastrodonWestSea_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shellos West Sea";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Raging Flood", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each damage counter on Gastrodon West Sea. Then, remove 2 damage counters from Gastrodon West Sea." },
      { name: "Wild Waves", cost: [], damage: "80", text: "Put 1 damage counter on each Benched Pokémon (both yours and your opponent's)." }
  ];
  public set: string = "SW";
  public name: string = "Gastrodon West Sea";
  public fullName: string = "Gastrodon West Sea SW 9";
  public text: string = "Gastrodon West Sea";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putDamageCountersDefending(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
