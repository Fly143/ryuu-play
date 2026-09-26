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

export class RegielekiV_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Switching Bolt", cost: [], damage: "30", text: "Switch this Pokémon with 1 of your Benched Pokémon." },
      { name: "Lightning Wall", cost: [], damage: "100", text: "During your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "PGO";
  public name: string = "Regieleki V";
  public fullName: string = "Regieleki V PGO 57";
  public text: string = "Regieleki V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 100);
    }
    return state;
  }
}
