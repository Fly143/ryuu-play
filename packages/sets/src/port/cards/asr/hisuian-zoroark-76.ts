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

export class HisuianZoroark_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hisuian Zorua";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Doom Curse", cost: [], damage: "", text: "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out." },
      { name: "Call Back", cost: [], damage: "", text: "Put a card from your discard pile into your hand." }
  ];
  public set: string = "ASR";
  public name: string = "Hisuian Zoroark";
  public fullName: string = "Hisuian Zoroark ASR 76";
  public text: string = "Hisuian Zoroark";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscard");
    }
    return state;
  }
}
