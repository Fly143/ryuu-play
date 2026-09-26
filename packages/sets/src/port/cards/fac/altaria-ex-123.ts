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

export class AltariaEX_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Powerful Gain", cost: [], damage: "30+", text: "If this Pokémon was healed during this turn, this attack does 60 more damage and heal 30 damage from this Pokémon." },
      { name: "Shining Wind", cost: [], damage: "80", text: "During your opponent's next turn, this Pokémon has no Weakness." }
  ];
  public set: string = "FAC";
  public name: string = "Altaria-EX";
  public fullName: string = "Altaria-EX FAC 123";
  public text: string = "Altaria-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "noWeaknessNextTurn");
    }
    return state;
  }
}
