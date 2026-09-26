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

export class Wailmer_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Double Attack", cost: [], damage: "", text: "Choose 2 of your opponent's Pokémon. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Surf", cost: [], damage: "50", text: "" }
  ];
  public set: string = "TM";
  public name: string = "Wailmer";
  public fullName: string = "Wailmer TM 52";
  public text: string = "Wailmer";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTwoOpponentBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
