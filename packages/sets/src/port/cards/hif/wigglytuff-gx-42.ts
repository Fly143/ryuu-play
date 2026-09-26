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

export class WigglytuffGX_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Jigglypuff";
  public hp: number = 210;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rolling Rush", cost: [], damage: "100+", text: "Flip a coin until you get tails. This attack does 30 more damage for each heads." },
      { name: "Lovely Star-GX", cost: [], damage: "130", text: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "HIF";
  public name: string = "Wigglytuff-GX";
  public fullName: string = "Wigglytuff-GX HIF 42";
  public text: string = "Wigglytuff-GX";

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
