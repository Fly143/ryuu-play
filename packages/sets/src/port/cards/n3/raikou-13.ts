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

export class Raikou_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lightning Burst", powerType: PowerType.ABILITY, text: "Whenever you attach a Lightning Energy card from your hand to Raikou, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. This power stops working while Raikou is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lightning Tackle", cost: [], damage: "50", text: "Flip a coin. If tails, Raikou does 20 damage to itself." }
  ];
  public set: string = "N3";
  public name: string = "Raikou";
  public fullName: string = "Raikou N3 13";
  public text: string = "Raikou";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
