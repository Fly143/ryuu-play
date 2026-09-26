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

export class Cleffa_131 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Excitable Draw", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, shuffle your hand into your deck and then draw 6 cards. If you use this Ability, your turn ends.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "UNM";
  public name: string = "Cleffa";
  public fullName: string = "Cleffa UNM 131";
  public text: string = "Cleffa";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 6);
    }
    return state;
  }
}
