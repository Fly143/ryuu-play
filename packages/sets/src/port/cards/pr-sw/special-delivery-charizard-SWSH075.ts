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

export class SpecialDeliveryCharizardSWSH075 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmeleon";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Happy Delivery", cost: [], damage: "", text: "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Flamethrower", cost: [], damage: "160", text: "Discard an Energy from this Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Special Delivery Charizard";
  public fullName: string = "Special Delivery Charizard PR-SW SWSH075";
  public text: string = "Special Delivery Charizard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchAnyToHand:2 */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
