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

export class Entei_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Howl", powerType: PowerType.ABILITY, text: "When you play Entei from your hand, you may discard the top 5 cards of your deck. (If you have fewer cards in your deck than that, discard all of them.) If any of those are Fire Energy cards, attach them to any of your Fire Pokémon of your choice. Using this power ends your turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Searing Flames", cost: [], damage: "60", text: "Discard 2 Fire Energy cards attached to Entei or this attack does nothing." }
  ];
  public set: string = "N3";
  public name: string = "Entei";
  public fullName: string = "Entei N3 6";
  public text: string = "Entei";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
