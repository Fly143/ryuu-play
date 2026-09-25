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

export class KleavorVSTARSWSH249 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kleavor V";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Axe Break", cost: [], damage: "120", text: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Rampaging Star", cost: [], damage: "30×", text: "This attack does 30 damage for each Pokémon in your discard pile. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "PR-SW";
  public name: string = "Kleavor VSTAR";
  public fullName: string = "Kleavor VSTAR PR-SW SWSH249";
  public text: string = "Kleavor VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
