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

export class SingleStrikeUrshifuV_151 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Laser Focus", cost: [], damage: "", text: "Search your deck for up to 2 Fighting Energy cards and attach them to this Pokémon. Then, shuffle your deck." },
      { name: "Impact Blow", cost: [], damage: "180", text: "During your next turn, this Pokémon can't use Impact Blow." }
  ];
  public set: string = "SHF";
  public name: string = "Single Strike Urshifu V";
  public fullName: string = "Single Strike Urshifu V SHF 151";
  public text: string = "Single Strike Urshifu V";

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
