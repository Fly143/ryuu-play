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

export class Flareon_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Delta Search", cost: [], damage: "10", text: "Search your deck for a Holon Energy card and attach it to Flareon. Shuffle your deck afterward." },
      { name: "Return Burn", cost: [], damage: "50", text: "You may return an Energy card attached to Flareon to your hand. If you do, the Defending Pokémon is now Burned." }
  ];
  public set: string = "DS";
  public name: string = "Flareon δ";
  public fullName: string = "Flareon δ DS 5";
  public text: string = "Flareon δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
