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

export class Raikou_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Legendary Body", powerType: PowerType.ABILITY, text: "As long as Raikou is your Active Pokémon, Raikou and Energy cards attached to it aren't affected by effects from Trainer cards other than Stadium cards. As long as this Power is active, discard any Trainer cards attached to Raikou. (This power works even if Raikou is Asleep, Confused, or Paralyzed.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lightning Spark", cost: [], damage: "30", text: "If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "N3";
  public name: string = "Raikou";
  public fullName: string = "Raikou N3 22";
  public text: string = "Raikou";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
