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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Amoonguss_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Foongus";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Surprise Spores", powerType: PowerType.ABILITY, text: "During your opponent's turn, if this Pokémon is discarded from your hand by an effect of an attack or Ability from your opponent's Pokémon, or by an effect of your opponent's Item or Supporter cards, discard your opponent's hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypno Hammer", cost: [], damage: "50", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "PGO";
  public name: string = "Amoonguss";
  public fullName: string = "Amoonguss PGO 12";
  public text: string = "Amoonguss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
