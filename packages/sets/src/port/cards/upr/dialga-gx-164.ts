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

export class DialgaGX_164 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 5.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Overclock", cost: [], damage: "", text: "Draw cards until you have 6 cards in your hand." },
      { name: "Shred", cost: [], damage: "80", text: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon." },
      { name: "Timeless-GX", cost: [], damage: "150", text: "Take another turn after this one. (Skip the between-turns step.) (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UPR";
  public name: string = "Dialga-GX";
  public fullName: string = "Dialga-GX UPR 164";
  public text: string = "Dialga-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawUntilHand:6");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
