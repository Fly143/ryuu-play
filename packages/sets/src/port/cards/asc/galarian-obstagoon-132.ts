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

export class GalarianObstagoon_132 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Linoone";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scarring Shout", cost: [], damage: "70×", text: "This attack does 70 damage for each damage counter on your opponent's Active Pokémon." },
      { name: "Punk Smash", cost: [], damage: "160", text: "Discard an Energy from this Pokémon." }
  ];
  public set: string = "ASC";
  public name: string = "Galarian Obstagoon";
  public fullName: string = "Galarian Obstagoon ASC 132";
  public text: string = "Galarian Obstagoon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
