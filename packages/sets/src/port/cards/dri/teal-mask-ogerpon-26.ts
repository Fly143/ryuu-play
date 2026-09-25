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

export class TealMaskOgerpon_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Grass Kagura", cost: [], damage: "", text: "Search your deck for a Basic Grass Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck." },
      { name: "Ogre's Hammer", cost: [], damage: "120", text: "During your next turn, this Pokémon can't use Ogre's Hammer." }
  ];
  public set: string = "DRI";
  public name: string = "Teal Mask Ogerpon";
  public fullName: string = "Teal Mask Ogerpon DRI 26";
  public text: string = "Teal Mask Ogerpon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
