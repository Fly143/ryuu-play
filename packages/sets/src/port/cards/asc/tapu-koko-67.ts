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

export class TapuKoko_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fast Flight", cost: [], damage: "", text: "If you go first, you can use this attack during your first turn. Discard your hand and draw 5 cards." },
      { name: "Thunder Blast", cost: [], damage: "130", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "ASC";
  public name: string = "Tapu Koko";
  public fullName: string = "Tapu Koko ASC 67";
  public text: string = "Tapu Koko";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
