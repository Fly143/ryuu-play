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

export class CornerstoneMaskOgerpon_111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rock Kagura", cost: [], damage: "", text: "Search your deck for a Basic Fighting Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck." },
      { name: "Mountain Ramming", cost: [], damage: "100", text: "Discard the top card of your opponent's deck." }
  ];
  public set: string = "DRI";
  public name: string = "Cornerstone Mask Ogerpon";
  public fullName: string = "Cornerstone Mask Ogerpon DRI 111";
  public text: string = "Cornerstone Mask Ogerpon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
