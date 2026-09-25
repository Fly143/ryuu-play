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

export class TeamRocketSPorygonZ_155 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Porygon2";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Reconstitute", powerType: PowerType.ABILITY, text: "You must discard 2 cards from your hand in order to use this Ability. Once during your turn, you may draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "R Command", cost: [], damage: "20×", text: "This attack does 20 damage for each Supporter card that has \"Team Rocket\" in its name in your discard pile." }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Porygon-Z";
  public fullName: string = "Team Rocket's Porygon-Z DRI 155";
  public text: string = "Team Rocket's Porygon-Z";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
