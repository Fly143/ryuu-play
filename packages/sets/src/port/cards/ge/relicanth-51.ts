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

export class Relicanth_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Primal Calling", cost: [], damage: "", text: "Search your deck for up to 3 Trainer Cards that have Fossil in their names, show them to your opponent, and put them into your hand. Shuffle your deck afterward." },
      { name: "Sleep Swirl", cost: [], damage: "30", text: "Both Relicanth and the Defending Pokémon are now Asleep." }
  ];
  public set: string = "GE";
  public name: string = "Relicanth";
  public fullName: string = "Relicanth GE 51";
  public text: string = "Relicanth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchTrainerToHand:1");
    }
    return state;
  }
}
