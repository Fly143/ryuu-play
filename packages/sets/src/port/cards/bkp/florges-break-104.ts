import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
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

export class FlorgesBREAK_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Florges";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Floral Breeze", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may heal 30 damage and remove a Special Condition from your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "BKP";
  public name: string = "Florges BREAK";
  public fullName: string = "Florges BREAK BKP 104";
  public text: string = "Florges BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 30);
    }
    return state;
  }
}
