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

export class MiraidonEx_143 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rapid Draw", cost: [], damage: "20", text: "Draw 2 cards." },
      { name: "Techno Turbo", cost: [], damage: "150", text: "Attach a Basic Lightning Energy card from your discard pile to 1 of your Benched Pokémon." }
  ];
  public set: string = "PR-SV";
  public name: string = "Miraidon ex";
  public fullName: string = "Miraidon ex PR-SV 143";
  public text: string = "Miraidon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
