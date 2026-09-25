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

export class Walrein_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sealeo";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Frigid Fangs", cost: [], damage: "60", text: "During your opponent's next turn, Pokémon that have 2 or less Energy attached can't attack. (This includes new Pokémon that come into play.)" },
      { name: "Megaton Fall", cost: [], damage: "170", text: "This Pokémon also does 50 damage to itself." }
  ];
  public set: string = "SSP";
  public name: string = "Walrein";
  public fullName: string = "Walrein SSP 45";
  public text: string = "Walrein";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
