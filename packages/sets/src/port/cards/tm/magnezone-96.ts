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

export class Magnezone_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magneton";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magnetic Draw", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may draw cards until you have 6 cards in your hand. This power can't be used if Magnezone is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lost Burn", cost: [], damage: "50×", text: "Put as many Energy cards attached to your Pokémon as you like in the Lost Zone. This attack does 50 damage times the number of Energy cards put in the Lost Zone in this way." }
  ];
  public set: string = "TM";
  public name: string = "Magnezone";
  public fullName: string = "Magnezone TM 96";
  public text: string = "Magnezone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* drawUntilHand:6 */ state;
    }
    return state;
  }
}
