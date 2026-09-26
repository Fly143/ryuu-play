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

export class SlowpokePsyduckGX_218 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 250;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ditch and Splash", cost: [], damage: "40×", text: "Discard any number of Supporter cards from your hand. This attack does 40 damage for each card you discarded in this way." },
      { name: "Thrilling Times-GX", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 100 more damage. If this Pokémon has at least 6 extra Water Energy attached to it (in addition to this attack's cost), flip 10 coins instead, and this attack does 100 more damage for each heads. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Slowpoke & Psyduck-GX";
  public fullName: string = "Slowpoke & Psyduck-GX CEC 218";
  public text: string = "Slowpoke & Psyduck-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
