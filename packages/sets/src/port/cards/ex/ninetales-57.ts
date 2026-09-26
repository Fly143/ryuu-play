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

export class Ninetales_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vulpix";
  public hp: number = 80;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mislead", cost: [], damage: "", text: "Flip 2 coins. If either of them is heads, the Defending Pokémon is now Confused." },
      { name: "Ethereal Flame", cost: [], damage: "", text: "Discard all Fire Energy cards attached to Ninetales. This attack does 30 damage plus 20 more damage for each card discarded this way." }
  ];
  public set: string = "EX";
  public name: string = "Ninetales";
  public fullName: string = "Ninetales EX 57";
  public text: string = "Ninetales";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
