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

export class Talonflame_111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fletchinder";
  public hp: number = 130;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flame Charge", cost: [], damage: "30", text: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck." },
      { name: "Loop-the-Loop", cost: [], damage: "90", text: "Put all Energy attached to this Pokémon into your hand." }
  ];
  public set: string = "GRI";
  public name: string = "Talonflame";
  public fullName: string = "Talonflame GRI 111";
  public text: string = "Talonflame";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
