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

export class Vileplume_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gloom";
  public hp: number = 150;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mega Drain", cost: [], damage: "50", text: "Heal 30 damage from this Pokémon." },
      { name: "Allergy Storm", cost: [], damage: "90", text: "Flip a coin. If heads, during your opponent's next turn, they can't play any Supporter cards from their hand. If tails, during your opponent's next turn, they can't play any Item cards from their hand." }
  ];
  public set: string = "ASR";
  public name: string = "Vileplume";
  public fullName: string = "Vileplume ASR 3";
  public text: string = "Vileplume";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
