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

export class PalossandEx_91 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sandygast";
  public hp: number = 280;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sand Tomb", cost: [], damage: "160", text: "During your opponent's next turn, the Defending Pokémon can't retreat." },
      { name: "Barite Jail", cost: [], damage: "", text: "Put damage counters on each of your opponent's Benched Pokémon until its remaining HP is 100." }
  ];
  public set: string = "SSP";
  public name: string = "Palossand ex";
  public fullName: string = "Palossand ex SSP 91";
  public text: string = "Palossand ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
