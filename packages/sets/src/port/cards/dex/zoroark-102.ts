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

export class Zoroark_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zorua";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nasty Plot", cost: [], damage: "", text: "Search your deck for a card and put it into your hand. Shuffle your deck afterward." },
      { name: "Foul Play", cost: [], damage: "", text: "Choose 1 of the Defending Pokémon's attacks and use it as this attack." }
  ];
  public set: string = "DEX";
  public name: string = "Zoroark";
  public fullName: string = "Zoroark DEX 102";
  public text: string = "Zoroark";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchTrainerToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "copyAttack");
    }
    return state;
  }
}
