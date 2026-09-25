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

export class KogaSZubat_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Group Attack", cost: [], damage: "10×", text: "Does 10 damage times the number of Koga's Zubats you have in play. Before doing damage, you may search your deck for any number of Basic Pokémon named Koga's Zubat and put them onto your Bench. (You can't get more cards with this attack than you have room on your Bench.) If you do, shuffle your deck afterward." }
  ];
  public set: string = "G2";
  public name: string = "Koga's Zubat";
  public fullName: string = "Koga's Zubat G2 83";
  public text: string = "Koga's Zubat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
