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

export class VictiniVMAX_165 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Victini V";
  public hp: number = 310;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spreading Flames", cost: [], damage: "", text: "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like." },
      { name: "Max Victory", cost: [], damage: "100+", text: "If your opponent's Active Pokémon is a Pokémon V, this attack does 120 more damage." }
  ];
  public set: string = "SHF";
  public name: string = "Victini VMAX";
  public fullName: string = "Victini VMAX SHF 165";
  public text: string = "Victini VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
