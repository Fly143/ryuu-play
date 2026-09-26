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

export class Dragonair_150 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dratini";
  public hp: number = 100;
    public height?: number = 4.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tail Whap", cost: [], damage: "20", text: "" },
      { name: "Destructive Whirlpool", cost: [], damage: "70", text: "Discard an Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Dragonair";
  public fullName: string = "Dragonair CEC 150";
  public text: string = "Dragonair";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
