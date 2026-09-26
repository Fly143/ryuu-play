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

export class Ferrothorn_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ferroseed";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Guard Press", cost: [], damage: "20", text: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance)." },
      { name: "Thorn Pod Throw", cost: [], damage: "80", text: "This attack does 20 damage times the amount of Metal Energy attached to this Pokémon to 1 of your opponent's Benched Pokémon. You can't do more than 100 damage to a Benched Pokémon in this way. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "UNB";
  public name: string = "Ferrothorn";
  public fullName: string = "Ferrothorn UNB 103";
  public text: string = "Ferrothorn";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
