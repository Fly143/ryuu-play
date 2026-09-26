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

export class Flamigo_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Peck", cost: [], damage: "30", text: "" },
      { name: "Combat Beak", cost: [], damage: "20+", text: "This attack does 20 more damage for each of your opponent's Benched Pokémon." }
  ];
  public set: string = "PAR";
  public name: string = "Flamigo";
  public fullName: string = "Flamigo PAR 106";
  public text: string = "Flamigo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerOpponentBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
