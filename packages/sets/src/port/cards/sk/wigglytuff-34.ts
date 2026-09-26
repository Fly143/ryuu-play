import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Wigglytuff_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Jigglypuff";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Good Neighbor", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Wigglytuff is on your bench, you may flip a coin. If heads, each player removes up to 2 damage counters from his or her Active Pokémon. This power can't be used if you have already used another Wigglytuff's Good Neighbor Poké-Power this turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Do the Wave", cost: [], damage: "10×", text: "Flip a coin. If heads, this attack does 10 damage times the number of Pokémon you have in play." }
  ];
  public set: string = "SK";
  public name: string = "Wigglytuff";
  public fullName: string = "Wigglytuff SK 34";
  public text: string = "Wigglytuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "flipHeadsDraw:1");
    }
    return state;
  }
}
