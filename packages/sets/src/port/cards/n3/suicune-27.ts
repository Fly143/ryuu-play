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

export class Suicune_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Legendary Body", powerType: PowerType.ABILITY, text: "As long as Suicune is your Active Pokémon, Suicune and Energy cards attached to it aren't affected by effects from Trainer cards other than Stadium cards. As long as this Power is active, discard any Trainer cards attached to Suicune. (This power works even if Suicune is Asleep, Confused, or Paralyzed.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crystal Wave", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, this attack does 30 damage and, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)" }
  ];
  public set: string = "N3";
  public name: string = "Suicune";
  public fullName: string = "Suicune N3 27";
  public text: string = "Suicune";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
