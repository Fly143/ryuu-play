import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class GardevoirEx_217 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kirlia";
  public hp: number = 310;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psychic Embrace", powerType: PowerType.ABILITY, text: "As often as you like during your turn, you may attach a Basic Psychic Energy card from your discard pile to 1 of your Psychic Pokémon. If you attached Energy to a Pokémon in this way, put 2 damage counters on that Pokémon. You can't use this Ability on a Pokémon that would be Knocked Out.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Miracle Force", cost: [], damage: "190", text: "This Pokémon recovers from all Special Conditions." }
  ];
  public set: string = "PAF";
  public name: string = "Gardevoir ex";
  public fullName: string = "Gardevoir ex PAF 217";
  public text: string = "Gardevoir ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
