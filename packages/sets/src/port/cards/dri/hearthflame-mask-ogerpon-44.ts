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

export class HearthflameMaskOgerpon_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fire Kagura", cost: [], damage: "", text: "Search your deck for a Basic Fire Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck." },
      { name: "Searing Flame", cost: [], damage: "80", text: "Your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "DRI";
  public name: string = "Hearthflame Mask Ogerpon";
  public fullName: string = "Hearthflame Mask Ogerpon DRI 44";
  public text: string = "Hearthflame Mask Ogerpon";

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
