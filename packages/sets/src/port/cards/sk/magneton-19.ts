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

export class Magneton_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magnemite";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Attract Energy", powerType: PowerType.ABILITY, text: "When you play Magneton from your hand to evolve 1 of your Pokémon, you may move any number of basic Energy cards attached to your other Pokémon to Magneton.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Electric Blast", cost: [], damage: "40", text: "You may discard all Lightning Energy cards attached to Magneton when you use this attack. If you do, put damage counters equal to the amount of Energy cards removed in this way on any number of your opponent's Benched Pokémon in the way you like. (For example, if you discard 3 Lightning Energy cards, you can put 1 damage counter on 1 of your opponent's Benched Pokémon and 2 on another.)" }
  ];
  public set: string = "SK";
  public name: string = "Magneton";
  public fullName: string = "Magneton SK 19";
  public text: string = "Magneton";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
