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

export class NaganadelGXSM125 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poipole";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Beast Raid", cost: [], damage: "20×", text: "This attack does 20 damage for each of your Ultra Beasts in play." },
      { name: "Jet Needle", cost: [], damage: "110", text: "This attack's damage isn't affected by Weakness or Resistance." },
      { name: "Stinger-GX", cost: [], damage: "", text: "Both players shuffle their Prize cards into their decks. Then, each player puts the top 3 cards of their deck face down as their Prize cards. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "PR-SM";
  public name: string = "Naganadel-GX";
  public fullName: string = "Naganadel-GX PR-SM SM125";
  public text: string = "Naganadel-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
