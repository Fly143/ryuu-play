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

export class AlolanMuk_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Grimer";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power of Alchemy", powerType: PowerType.ABILITY, text: "Each Basic Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crunch", cost: [], damage: "90", text: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "SUM";
  public name: string = "Alolan Muk";
  public fullName: string = "Alolan Muk SUM 58";
  public text: string = "Alolan Muk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
