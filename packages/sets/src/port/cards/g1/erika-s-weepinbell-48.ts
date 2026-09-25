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

export class ErikaSWeepinbell_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Erika's Bellsprout";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drool", cost: [], damage: "10", text: "" },
      { name: "Flytrap", cost: [], damage: "20", text: "Before doing damage, choose 1 of your opponent's Benched Pokémon and switch it with his or her Active Pokémon. This attack can't be used if your opponent has no Benched Pokémon." }
  ];
  public set: string = "G1";
  public name: string = "Erika's Weepinbell";
  public fullName: string = "Erika's Weepinbell G1 48";
  public text: string = "Erika's Weepinbell";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
