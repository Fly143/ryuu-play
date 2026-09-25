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

export class Typhlosion_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Quilava";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blazing Energy", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this Ability. All Energy attached to your Pokémon are Fire Energy instead of their usual type until the end of your turn. (This includes cards that come into play on this turn.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lost Flame", cost: [], damage: "120", text: "Put 2 Energy attached to your opponent's Active Pokémon in the Lost Zone." }
  ];
  public set: string = "DRM";
  public name: string = "Typhlosion";
  public fullName: string = "Typhlosion DRM 42";
  public text: string = "Typhlosion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
