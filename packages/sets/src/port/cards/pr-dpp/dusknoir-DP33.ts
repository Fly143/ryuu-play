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

export class DusknoirDP33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dusclops";
  public hp: number = 130;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Hide", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand, choose a Pokémon you find there, and put it on the bottom of his or her deck. This power can't be used if Dusknoir is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Reaper Pulse", cost: [], damage: "70", text: "Move up to 2 damage counters from Dusknoir to 1 of your opponent's Benched Pokémon." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Dusknoir";
  public fullName: string = "Dusknoir PR-DPP DP33";
  public text: string = "Dusknoir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "peekOpponentHand");
    }
    return state;
  }
}
