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

export class CrobatVSWSH098 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Asset", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench during your turn, you may draw cards until you have 6 cards in your hand. You can't use more than 1 Dark Asset Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Venomous Fang", cost: [], damage: "70", text: "Your opponent's Active Pokémon is now Poisoned." }
  ];
  public set: string = "PR-SW";
  public name: string = "Crobat V";
  public fullName: string = "Crobat V PR-SW SWSH098";
  public text: string = "Crobat V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
