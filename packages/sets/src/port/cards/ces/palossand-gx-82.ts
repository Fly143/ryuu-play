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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PalossandGX_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sandygast";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Eerie Light", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Confused." },
      { name: "Absorb Life", cost: [], damage: "100", text: "Heal 20 damage from this Pokémon." },
      { name: "Sandy Fear-GX", cost: [], damage: "60×", text: "Look at the top 13 cards of your opponent's deck and discard any number of Pokémon you find there. This attack does 60 damage for each card you discarded in this way. Your opponent shuffles the other cards back into their deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CES";
  public name: string = "Palossand-GX";
  public fullName: string = "Palossand-GX CES 82";
  public text: string = "Palossand-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
