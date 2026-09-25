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

export class OriginFormeDialgaVSTAR_114 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Origin Forme Dialga V";
  public hp: number = 280;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Metal Blast", cost: [], damage: "40+", text: "This attack does 40 more damage for each Metal Energy attached to this Pokémon." },
      { name: "Star Chronos", cost: [], damage: "220", text: "Take another turn after this one. (Skip Pokémon Checkup.) (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "BRS";
  public name: string = "Origin Forme Dialga VSTAR";
  public fullName: string = "Origin Forme Dialga VSTAR BRS 114";
  public text: string = "Origin Forme Dialga VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
