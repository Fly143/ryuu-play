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

export class MorpekoEx_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wheely Draw", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw 6 cards." },
      { name: "Hangry Blaster", cost: [], damage: "40+", text: "This attack does 40 more damage for each damage counter on this Pokémon." }
  ];
  public set: string = "PBL";
  public name: string = "Morpeko ex";
  public fullName: string = "Morpeko ex PBL 55";
  public text: string = "Morpeko ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, Math.floor(effect.player.active.damage / 10));
    }
    return state;
  }
}
