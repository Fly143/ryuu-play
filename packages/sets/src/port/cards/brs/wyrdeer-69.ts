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

export class Wyrdeer_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Stantler";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hurried Gait", powerType: PowerType.ABILITY, text: "Once during your turn, you may draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Extrasensory", cost: [], damage: "40+", text: "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage." }
  ];
  public set: string = "BRS";
  public name: string = "Wyrdeer";
  public fullName: string = "Wyrdeer BRS 69";
  public text: string = "Wyrdeer";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
