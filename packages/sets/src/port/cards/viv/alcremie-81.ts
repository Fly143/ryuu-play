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

export class Alcremie_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Milcery";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sharing Sweets", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have each player draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wonder Shine", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "VIV";
  public name: string = "Alcremie";
  public fullName: string = "Alcremie VIV 81";
  public text: string = "Alcremie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
