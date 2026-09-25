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

export class GalarianMrRime_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Mr. Mime";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ball Juggling", cost: [], damage: "10+", text: "Discard any number of Item cards that have the word \"Ball\" in their name from your hand. This attack does 40 more damage for each card you discarded in this way." },
      { name: "Frost Smash", cost: [], damage: "80", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Galarian Mr. Rime";
  public fullName: string = "Galarian Mr. Rime SHF 35";
  public text: string = "Galarian Mr. Rime";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 0);
    }
    return state;
  }
}
