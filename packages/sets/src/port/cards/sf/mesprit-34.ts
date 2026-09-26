import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  BetweenTurnsEffect,
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

export class Mesprit_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psychic Bind", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Mesprit from your hand onto your Bench, you may use this power. Your opponent can't use any Poké-Powers on his or her Pokémon during your opponent's next turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Extrasensory", cost: [], damage: "20+", text: "If you have the same number of cards in your hand as your opponent, this attack does 20 damage plus 50 more damage." }
  ];
  public set: string = "SF";
  public name: string = "Mesprit";
  public fullName: string = "Mesprit SF 34";
  public text: string = "Mesprit";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noPowers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noPowers");
    }
    return state;
  }
}
