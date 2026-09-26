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

export class Cetitan_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cetoddle";
  public hp: number = 180;
    public height?: number = 2.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hammer In", cost: [], damage: "50", text: "" },
      { name: "Sweeping Tackle", cost: [], damage: "200-", text: "This attack does 20 less damage for each damage counter on this Pokémon." }
  ];
  public set: string = "SVI";
  public name: string = "Cetitan";
  public fullName: string = "Cetitan SVI 60";
  public text: string = "Cetitan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, Math.floor(effect.player.active.damage / 10));
    }
    return state;
  }
}
