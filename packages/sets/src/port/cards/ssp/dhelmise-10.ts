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

export class Dhelmise_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rescue Kedge", cost: [], damage: "", text: "Put up to 2 Pokémon from your discard pile into your hand." },
      { name: "Annihilating Anchor", cost: [], damage: "80", text: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon." }
  ];
  public set: string = "SSP";
  public name: string = "Dhelmise";
  public fullName: string = "Dhelmise SSP 10";
  public text: string = "Dhelmise";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscard");
    }
    return state;
  }
}
