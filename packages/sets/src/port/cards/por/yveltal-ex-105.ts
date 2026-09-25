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

export class YveltalEx_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Soul Destroyer", cost: [], damage: "", text: "Knock Out each of your opponent's Pokémon that has 50 HP or less remaining." },
      { name: "Dark Strike", cost: [], damage: "210", text: "During your next turn, this Pokémon can't use Dark Strike." }
  ];
  public set: string = "POR";
  public name: string = "Yveltal ex";
  public fullName: string = "Yveltal ex POR 105";
  public text: string = "Yveltal ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
