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

export class LatiasGG20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Red Assist", powerType: PowerType.ABILITY, text: "Once during your turn, you may attach a Psychic Energy card from your hand to 1 of your Latios.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dyna Barrier", cost: [], damage: "70", text: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX." }
  ];
  public set: string = "CRZ";
  public name: string = "Latias";
  public fullName: string = "Latias CRZ GG20";
  public text: string = "Latias";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
