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

export class WellspringMaskOgerpon_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Water Kagura", cost: [], damage: "", text: "Search your deck for a Basic Water Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck." },
      { name: "Bubble Drain", cost: [], damage: "100", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "DRI";
  public name: string = "Wellspring Mask Ogerpon";
  public fullName: string = "Wellspring Mask Ogerpon DRI 67";
  public text: string = "Wellspring Mask Ogerpon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
