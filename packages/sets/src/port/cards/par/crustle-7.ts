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

export class Crustle_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dwebble";
  public hp: number = 130;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Confront", cost: [], damage: "50", text: "" },
      { name: "Crag Bash", cost: [], damage: "100", text: "During your opponent's next turn, this Pokémon takes 100 less damage from attacks from Evolution Pokémon (after applying Weakness and Resistance)." }
  ];
  public set: string = "PAR";
  public name: string = "Crustle";
  public fullName: string = "Crustle PAR 7";
  public text: string = "Crustle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 100);
    }
    return state;
  }
}
