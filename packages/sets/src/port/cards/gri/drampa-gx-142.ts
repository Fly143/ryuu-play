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

export class DrampaGX_142 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Righteous Edge", cost: [], damage: "20", text: "Discard a Special Energy from your opponent's Active Pokémon." },
      { name: "Berserk", cost: [], damage: "80+", text: "If your Benched Pokémon have any damage counters on them, this attack does 70 more damage." },
      { name: "Big Wheel-GX", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw 10 cards. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "GRI";
  public name: string = "Drampa-GX";
  public fullName: string = "Drampa-GX GRI 142";
  public text: string = "Drampa-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 70, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
