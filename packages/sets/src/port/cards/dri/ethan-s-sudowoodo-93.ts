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

export class EthanSSudowoodo_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Impound", cost: [], damage: "20", text: "During your opponent's next turn, the Defending Pokémon can't retreat." },
      { name: "Try to Imitate", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 of your opponent's Active Pokémon's attacks and use it as this attack." }
  ];
  public set: string = "DRI";
  public name: string = "Ethan's Sudowoodo";
  public fullName: string = "Ethan's Sudowoodo DRI 93";
  public text: string = "Ethan's Sudowoodo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* copyAttack */ state;
    }
    return state;
  }
}
