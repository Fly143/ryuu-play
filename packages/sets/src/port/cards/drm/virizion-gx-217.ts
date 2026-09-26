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

export class VirizionGX_217 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Double Draw", cost: [], damage: "", text: "Draw 2 cards." },
      { name: "Sensitive Blade", cost: [], damage: "50+", text: "If you played a Supporter card from your hand during this turn, this attack does 80 more damage." },
      { name: "Breeze Away-GX", cost: [], damage: "", text: "Put any number of your Pokémon in play and all cards attached to them into your hand. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "DRM";
  public name: string = "Virizion-GX";
  public fullName: string = "Virizion-GX DRM 217";
  public text: string = "Virizion-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
