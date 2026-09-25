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

export class HisuianZoroarkVSTAR_203 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hisuian Zoroark V";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Phantom Star", powerType: PowerType.ABILITY, text: "During your turn, you may discard your hand and draw 7 cards. (You can't use more than 1 VSTAR Power in a game.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ticking Curse", cost: [], damage: "50×", text: "This attack does 50 damage for each of your Pokémon that has any damage counters on it." }
  ];
  public set: string = "ASR";
  public name: string = "Hisuian Zoroark VSTAR";
  public fullName: string = "Hisuian Zoroark VSTAR ASR 203";
  public text: string = "Hisuian Zoroark VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 7);
    }
    return state;
  }
}
