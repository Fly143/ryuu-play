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

export class AlolanRaticate_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Rattata";
  public hp: number = 120;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chase Up", cost: [], damage: "", text: "Search your deck for a card and put it into your hand. Then, shuffle your deck." },
      { name: "Super Fang", cost: [], damage: "", text: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10." }
  ];
  public set: string = "PGO";
  public name: string = "Alolan Raticate";
  public fullName: string = "Alolan Raticate PGO 42";
  public text: string = "Alolan Raticate";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchTrainerToHand:1");
    }
    return state;
  }
}
