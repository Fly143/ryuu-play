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

export class Feraligatr_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Croconaw";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Downpour", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may discard a Water Energy card from your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Riptide", cost: [], damage: "10+", text: "This attack does 20 more damage for each Water Energy card in your discard pile. Then, shuffle those cards into your deck." }
  ];
  public set: string = "DRM";
  public name: string = "Feraligatr";
  public fullName: string = "Feraligatr DRM 24";
  public text: string = "Feraligatr";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    return state;
  }
}
