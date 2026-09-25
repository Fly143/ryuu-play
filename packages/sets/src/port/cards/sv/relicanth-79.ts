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

export class Relicanth_79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Grand Swell", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon for each Pokémon Tool and Stadium card your opponent has in play. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Amnesia", cost: [], damage: "30", text: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn." }
  ];
  public set: string = "SV";
  public name: string = "Relicanth";
  public fullName: string = "Relicanth SV 79";
  public text: string = "Relicanth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "metronome");
    }
    return state;
  }
}
