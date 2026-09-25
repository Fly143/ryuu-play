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

export class PalkiaGX_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spatial Control", cost: [], damage: "", text: "Move any number of Energy from your Benched Pokémon to this Pokémon." },
      { name: "Hydro Pressure", cost: [], damage: "60+", text: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon." },
      { name: "Zero Vanish-GX", cost: [], damage: "150", text: "Shuffle all Energy from each of your opponent's Pokémon into their deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "FLI";
  public name: string = "Palkia-GX";
  public fullName: string = "Palkia-GX FLI 119";
  public text: string = "Palkia-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
