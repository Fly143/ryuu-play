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

export class IncineroarGX_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Torracat";
  public hp: number = 250;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hustling Strike", cost: [], damage: "10+", text: "This attack does 20 more damage for each of your Benched Fire Pokémon." },
      { name: "Tiger Swing", cost: [], damage: "80+", text: "Flip 2 coins. This attack does 50 more damage for each heads." },
      { name: "Burning Slam-GX", cost: [], damage: "200", text: "Your opponent's Active Pokémon is now Burned. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "SUM";
  public name: string = "Incineroar-GX";
  public fullName: string = "Incineroar-GX SUM 27";
  public text: string = "Incineroar-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
