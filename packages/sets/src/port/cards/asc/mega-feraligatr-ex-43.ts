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

export class MegaFeraligatrEx_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Croconaw";
  public hp: number = 370;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mortal Crunch", cost: [], damage: "200+", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 200 more damage." }
  ];
  public set: string = "ASC";
  public name: string = "Mega Feraligatr ex";
  public fullName: string = "Mega Feraligatr ex ASC 43";
  public text: string = "Mega Feraligatr ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 200, 1);
    }
    return state;
  }
}
