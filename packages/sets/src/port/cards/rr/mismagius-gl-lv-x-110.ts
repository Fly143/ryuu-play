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

export class MismagiusGLLVX_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mismagius GL";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magical Return", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may return a Pokémon Tool or Technical Machine card attached to your Pokémon to your hand. This power can't be used if Mismagius GL is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Darkness Magic", cost: [], damage: "", text: "Count the number of cards in your hand. Put that many damage counters on the Defending Pokémon. You can't put more than 8 damage counters in this way." }
  ];
  public set: string = "RR";
  public name: string = "Mismagius GL LV.X";
  public fullName: string = "Mismagius GL LV.X RR 110";
  public text: string = "Mismagius GL LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* oncePerTurnAttachFromHand */ state;
    }
    return state;
  }
}
