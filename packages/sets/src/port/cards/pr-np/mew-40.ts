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

export class Mew_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psywave", cost: [], damage: "10×", text: "Does 10 damage times the amount of Energy attached to the Defending Pokémon." },
      { name: "Devolution Beam", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 of either player's Evolved Pokémon, remove the highest stage Evolution card from that Pokémon, and put it into that player's hand." }
  ];
  public set: string = "PR-NP";
  public name: string = "Mew";
  public fullName: string = "Mew PR-NP 40";
  public text: string = "Mew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesEnergyDefending:10");
    }
    return state;
  }
}
