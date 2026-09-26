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

export class MewV_251 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Mix", cost: [], damage: "", text: "Search your deck for an Energy card and attach it to 1 of your Fusion Strike Pokémon. Then, shuffle your deck." },
      { name: "Psychic Leap", cost: [], damage: "70", text: "You may shuffle this Pokémon and all attached cards into your deck." }
  ];
  public set: string = "EVS";
  public name: string = "Mew V";
  public fullName: string = "Mew V EVS 251";
  public text: string = "Mew V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
