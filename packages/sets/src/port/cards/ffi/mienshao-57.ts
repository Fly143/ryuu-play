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

export class Mienshao_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mienfoo";
  public hp: number = 90;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Aero Turn", cost: [], damage: "40", text: "Return this Pokémon and all cards attached to it to your hand." },
      { name: "High Jump Kick", cost: [], damage: "40", text: "" }
  ];
  public set: string = "FFI";
  public name: string = "Mienshao";
  public fullName: string = "Mienshao FFI 57";
  public text: string = "Mienshao";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.scoopUpSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
