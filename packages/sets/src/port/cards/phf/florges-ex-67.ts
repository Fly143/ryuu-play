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

export class FlorgesEX_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lead", cost: [], damage: "", text: "Search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward." },
      { name: "Bright Garden", cost: [], damage: "20×", text: "This attack does 20 damage times the number of Grass Pokémon and Fairy Pokémon you have in play." }
  ];
  public set: string = "PHF";
  public name: string = "Florges-EX";
  public fullName: string = "Florges-EX PHF 67";
  public text: string = "Florges-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchTrainerToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
