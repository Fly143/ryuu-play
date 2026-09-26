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

export class CresseliaEX_143 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sparkling Particles", powerType: PowerType.ABILITY, text: "At any time between turns, heal 10 damage from this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Protection", cost: [], damage: "90", text: "During your opponent's next turn, this Pokémon has no Weakness." }
  ];
  public set: string = "PLS";
  public name: string = "Cresselia-EX";
  public fullName: string = "Cresselia-EX PLS 143";
  public text: string = "Cresselia-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "noWeaknessNextTurn");
    }
    return state;
  }
}
