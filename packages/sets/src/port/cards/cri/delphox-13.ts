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

export class Delphox_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Braixen";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flaring Magic", powerType: PowerType.ABILITY, text: "Once during your turn, you may discard a Basic Fire Energy card from your hand in order to use this Ability. Draw cards until you have 7 cards in your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energized Storm", cost: [], damage: "30×", text: "This attack does 30 damage for each Energy attached to all Pokémon." }
  ];
  public set: string = "CRI";
  public name: string = "Delphox";
  public fullName: string = "Delphox CRI 13";
  public text: string = "Delphox";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* drawUntilHand:7 */ state;
    }
    return state;
  }
}
