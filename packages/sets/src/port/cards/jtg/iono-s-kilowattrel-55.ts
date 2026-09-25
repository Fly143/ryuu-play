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

export class IonoSKilowattrel_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Iono's Wattrel";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flashing Draw", powerType: PowerType.ABILITY, text: "You must discard a Basic Lightning Energy from this Pokémon in order to use this Ability. Once during your turn, you may draw cards until you have 6 cards in your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mach Bolt", cost: [], damage: "70", text: "" }
  ];
  public set: string = "JTG";
  public name: string = "Iono's Kilowattrel";
  public fullName: string = "Iono's Kilowattrel JTG 55";
  public text: string = "Iono's Kilowattrel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* drawUntilHand:6 */ state;
    }
    return state;
  }
}
