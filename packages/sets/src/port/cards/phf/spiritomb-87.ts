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

export class Spiritomb_87 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sealing Scream", powerType: PowerType.ABILITY, text: "Each player can't play any ACE SPEC cards from his or her hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hexed Mirror", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand." }
  ];
  public set: string = "PHF";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb PHF 87";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noTrainers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noTrainers");
    }
    return state;
  }
}
