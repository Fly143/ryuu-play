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

export class ShiningRayquaza_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dragon Pulse", cost: [], damage: "40", text: "Discard the top 2 cards of your deck." },
      { name: "Sky Judgment", cost: [], damage: "190", text: "Discard 3 Energy from this Pokémon." }
  ];
  public set: string = "SLG";
  public name: string = "Shining Rayquaza";
  public fullName: string = "Shining Rayquaza SLG 56";
  public text: string = "Shining Rayquaza";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
