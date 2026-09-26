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

export class Kyurem_472 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 3.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Plasma Bane", powerType: PowerType.ABILITY, text: "If your opponent has any cards in their discard pile that have \"Colress\" in the name, this Pokémon can use the Trifrost attack for Colorless.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Trifrost", cost: [], damage: "", text: "Discard all Energy from this Pokémon. This attack does 110 damage to 3 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "SFA";
  public name: string = "Kyurem";
  public fullName: string = "Kyurem SFA 47";
  public text: string = "Kyurem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
