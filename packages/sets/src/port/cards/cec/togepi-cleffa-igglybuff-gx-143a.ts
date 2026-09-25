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

export class TogepiCleffaIgglybuffGX_143a extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 240;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rolling Panic", cost: [], damage: "120+", text: "Flip a coin until you get tails. This attack does 30 more damage for each heads." },
      { name: "Supreme Puff-GX", cost: [], damage: "", text: "Take another turn after this one. (Skip the between-turns step.) If this Pokémon has at least 14 extra Fairy Energy attached to it (in addition to this attack's cost), your opponent shuffles all of their Benched Pokémon and all cards attached to them into their deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Togepi & Cleffa & Igglybuff-GX";
  public fullName: string = "Togepi & Cleffa & Igglybuff-GX CEC 143a";
  public text: string = "Togepi & Cleffa & Igglybuff-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
