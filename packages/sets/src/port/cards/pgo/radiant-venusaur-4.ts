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

export class RadiantVenusaur_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sunny Bloom", powerType: PowerType.ABILITY, text: "Once at the end of your turn (after your attack), you may use this Ability. Draw cards until you have 4 cards in your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pollen Hazard", cost: [], damage: "90", text: "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned." }
  ];
  public set: string = "PGO";
  public name: string = "Radiant Venusaur";
  public fullName: string = "Radiant Venusaur PGO 4";
  public text: string = "Radiant Venusaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
