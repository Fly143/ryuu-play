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

export class Lokix_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nymble";
  public hp: number = 120;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Assaulting Kick", cost: [], damage: "30+", text: "If this Pokémon evolved from Nymble during this turn, this attack does 100 more damage." },
      { name: "Speed Attack", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PAL";
  public name: string = "Lokix";
  public fullName: string = "Lokix PAL 21";
  public text: string = "Lokix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 1);
    }
    return state;
  }
}
