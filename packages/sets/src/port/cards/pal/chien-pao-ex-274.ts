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

export class ChienPaoEx_274 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shivery Chill", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may search your deck for up to 2 Basic Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hail Blade", cost: [], damage: "60×", text: "You may discard any amount of Water Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way." }
  ];
  public set: string = "PAL";
  public name: string = "Chien-Pao ex";
  public fullName: string = "Chien-Pao ex PAL 274";
  public text: string = "Chien-Pao ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
