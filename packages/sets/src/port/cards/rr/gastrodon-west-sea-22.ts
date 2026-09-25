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

export class GastrodonWestSea_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shellos West Sea";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tackle", cost: [], damage: "50", text: "" },
      { name: "Muddy Bomb", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon and 10 damage to each of your opponent's other Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Raging Sea", cost: [], damage: "60+", text: "Does 60 damage plus 10 more damage for each of your Benched Pokémon that has any damage counters on it." }
  ];
  public set: string = "RR";
  public name: string = "Gastrodon West Sea";
  public fullName: string = "Gastrodon West Sea RR 22";
  public text: string = "Gastrodon West Sea";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
