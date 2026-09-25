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

export class TerapagosEx_170 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Unified Beatdown", cost: [], damage: "30×", text: "If you go second, you can't use this attack during your first turn. This attack does 30 damage for each of your Benched Pokémon." },
      { name: "Crown Opal", cost: [], damage: "180", text: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic non-Colorless Pokémon." }
  ];
  public set: string = "SCR";
  public name: string = "Terapagos ex";
  public fullName: string = "Terapagos ex SCR 170";
  public text: string = "Terapagos ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
