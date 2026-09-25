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

export class Chandelure_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lampent";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shady Move", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may move 1 damage counter from 1 Pokémon to another Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Super Singe", cost: [], damage: "50", text: "Your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "GRI";
  public name: string = "Chandelure";
  public fullName: string = "Chandelure GRI 13";
  public text: string = "Chandelure";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
