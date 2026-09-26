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

export class Raticate_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rattata";
  public hp: number = 80;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Razor-Sharp Incisors", cost: [], damage: "10×", text: "Does 10 damage times the number of damage counters on the Defending Pokémon." },
      { name: "Gnaw Up", cost: [], damage: "30", text: "Discard a Special Energy card attached to the Defending Pokémon." }
  ];
  public set: string = "UD";
  public name: string = "Raticate";
  public fullName: string = "Raticate UD 34";
  public text: string = "Raticate";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesSelfCounters(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
