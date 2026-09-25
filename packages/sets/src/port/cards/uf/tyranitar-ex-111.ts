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

export class TyranitarEx_111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pupitar";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shatter", cost: [], damage: "30", text: "Discard any Stadium card in play." },
      { name: "Derail", cost: [], damage: "30", text: "Discard a Special Energy card, if any, attached to the Defending Pokémon." },
      { name: "Mix-Up", cost: [], damage: "70", text: "Your opponent discards the top card of his or her deck." },
      { name: "Losing Control", cost: [], damage: "120", text: "Discard the top 3 cards of your deck." }
  ];
  public set: string = "UF";
  public name: string = "Tyranitar ex";
  public fullName: string = "Tyranitar ex UF 111";
  public text: string = "Tyranitar ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* discardStadium */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[3]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
