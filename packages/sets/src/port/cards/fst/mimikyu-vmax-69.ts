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

export class MimikyuVMAX_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mimikyu V";
  public hp: number = 300;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ominous Numbers", cost: [], damage: "", text: "Put 4 damage counters on your opponent's Pokémon in any way you like. If you played Acerola's Premonition from your hand during this turn, place 13 damage counters instead." },
      { name: "Max Shadow", cost: [], damage: "120", text: "Discard a random card from your opponent's hand." }
  ];
  public set: string = "FST";
  public name: string = "Mimikyu VMAX";
  public fullName: string = "Mimikyu VMAX FST 69";
  public text: string = "Mimikyu VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putDamageCountersDefending(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardOpponentHand(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
