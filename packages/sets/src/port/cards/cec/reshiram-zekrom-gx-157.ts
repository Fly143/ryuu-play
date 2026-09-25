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

export class ReshiramZekromGX_157 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fabled Flarebolts", cost: [], damage: "90×", text: "Discard up to 3 in any combination of basic Fire and basic Lightning Energy cards from your Benched Pokémon. This attack does 90 damage for each card you discarded in this way." },
      { name: "Cross Break-GX", cost: [], damage: "", text: "This attack does 170 damage to 1 of your opponent's Benched Pokémon. If you played N's Resolve from your hand during this turn, this attack also does 170 damage to 1 of your opponent's other Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Reshiram & Zekrom-GX";
  public fullName: string = "Reshiram & Zekrom-GX CEC 157";
  public text: string = "Reshiram & Zekrom-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
