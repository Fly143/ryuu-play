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

export class Regidrago_118 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dragon's Hoard", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may draw cards until you have 4 cards in your hand. You can't use more than 1 Dragon's Hoard Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Giant Fangs", cost: [], damage: "160", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Regidrago";
  public fullName: string = "Regidrago BRS 118";
  public text: string = "Regidrago";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "drawUntilHand:4");
    }
    return state;
  }
}
