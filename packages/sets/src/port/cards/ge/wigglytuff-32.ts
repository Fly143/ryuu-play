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

export class Wigglytuff_322 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Jigglypuff";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Good Night Melody", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. Each Active Pokémon (both yours and your opponent's) is now Asleep. This power can't be used if Wigglytuff is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ballon Attack", cost: [], damage: "40+", text: "If Igglybuff is anywhere under Wigglytuff, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "GE";
  public name: string = "Wigglytuff";
  public fullName: string = "Wigglytuff GE 32";
  public text: string = "Wigglytuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "specialBoth:CONFUSED");
    }
    return state;
  }
}
