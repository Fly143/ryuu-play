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

export class KricketuneVTG12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Exciting Stage", powerType: PowerType.ABILITY, text: "Once during your turn, you may draw cards until you have 3 cards in your hand. If this Pokémon is in the Active Spot, you may draw cards until you have 4 cards in your hand instead. You can't use more than 1 Exciting Stage Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "X-Scissor", cost: [], damage: "80+", text: "Flip a coin. If heads, this attack does 80 more damage." }
  ];
  public set: string = "SIT";
  public name: string = "Kricketune V";
  public fullName: string = "Kricketune V SIT TG12";
  public text: string = "Kricketune V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* drawUntilHand:3 */ state;
    }
    return state;
  }
}
