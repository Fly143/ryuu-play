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

export class Krookodile_137 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Krokorok";
  public hp: number = 170;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tighten Up", cost: [], damage: "60", text: "Your opponent discards 2 cards from their hand." },
      { name: "Cursed Slug", cost: [], damage: "120+", text: "If your opponent has 3 or fewer cards in their hand, this attack does 120 more damage." }
  ];
  public set: string = "BLK";
  public name: string = "Krookodile";
  public fullName: string = "Krookodile BLK 137";
  public text: string = "Krookodile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
