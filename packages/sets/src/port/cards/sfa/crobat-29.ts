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

export class Crobat_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Golbat";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shadowy Envoy", powerType: PowerType.ABILITY, text: "Once during your turn, if you played Janine's Secret Art from your hand this turn, you may draw cards until you have 8 cards in your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Fang", cost: [], damage: "120", text: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 2 damage counters on that Pokémon instead of 1." }
  ];
  public set: string = "SFA";
  public name: string = "Crobat";
  public fullName: string = "Crobat SFA 29";
  public text: string = "Crobat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
