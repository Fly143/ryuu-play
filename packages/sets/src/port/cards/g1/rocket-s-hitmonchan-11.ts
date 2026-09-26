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

export class RocketSHitmonchan_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crosscounter", cost: [], damage: "", text: "If an attack does damage to Rocket's Hitmonchan during your opponent's next turn (even if Rocket's Hitmonchan is Knocked Out), flip a coin. If heads, Rocket's Hitmonchan attacks your opponent's Active Pokémon for double that amount of damage. (If Rocket's Hitmonchan takes 20 damage, it does 40 damage to that Pokémon.)" },
      { name: "Magnum Punch", cost: [], damage: "50", text: "" }
  ];
  public set: string = "G1";
  public name: string = "Rocket's Hitmonchan";
  public fullName: string = "Rocket's Hitmonchan G1 11";
  public text: string = "Rocket's Hitmonchan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "koRevengePerEnergy");
    }
    return state;
  }
}
