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

export class Espeon_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Miraculous Shine", cost: [], damage: "", text: "Devolve each of your opponent's evolved Pokémon by putting the highest Stage Evolution card on it into your opponent's hand." },
      { name: "Super Psy Bolt", cost: [], damage: "90", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Espeon";
  public fullName: string = "Espeon 30C 69";
  public text: string = "Espeon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "devolve");
    }
    return state;
  }
}
