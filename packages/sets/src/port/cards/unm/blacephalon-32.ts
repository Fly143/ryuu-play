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

export class Blacephalon_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Blazer", cost: [], damage: "10+", text: "Turn 1 of your face-down Prize cards face up. If it's a Fire Energy card, this attack does 50 more damage. (That Prize card remains face up for the rest of the game.)" },
      { name: "Fireball Circus", cost: [], damage: "50×", text: "Discard any number of Fire Energy cards from your hand. This attack does 50 damage for each card you discarded in this way." }
  ];
  public set: string = "UNM";
  public name: string = "Blacephalon";
  public fullName: string = "Blacephalon UNM 32";
  public text: string = "Blacephalon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    return state;
  }
}
