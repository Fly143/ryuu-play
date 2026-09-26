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

export class GalvantulaEx_168 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Joltik";
  public hp: number = 260;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Charged Web", cost: [], damage: "110+", text: "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 110 more damage." },
      { name: "Fulgurite", cost: [], damage: "180", text: "Discard all Energy from this Pokémon. During your opponent's next turn, they can't play any Item cards from their hand." }
  ];
  public set: string = "SCR";
  public name: string = "Galvantula ex";
  public fullName: string = "Galvantula ex SCR 168";
  public text: string = "Galvantula ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 110, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
