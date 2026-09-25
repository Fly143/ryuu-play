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

export class MagcargoGX_218 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slugma";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Crushing Charge", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard the top card of your deck. If it's a basic Energy card, attach it to 1 of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lava Flow", cost: [], damage: "50+", text: "Discard any amount of basic Energy from this Pokémon. This attack does 50 more damage for each card you discarded in this way." },
      { name: "Burning Magma-GX", cost: [], damage: "", text: "Discard the top 5 cards of your opponent's deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "DRM";
  public name: string = "Magcargo-GX";
  public fullName: string = "Magcargo-GX DRM 218";
  public text: string = "Magcargo-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 5);
    }
    return state;
  }
}
