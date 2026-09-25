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

export class Ditto_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Transform", powerType: PowerType.ABILITY, text: "During your turn (before your attack), you may put a Basic Pokémon from your hand on top of this Pokémon. (This does not count as playing that Pokémon or evolving.) This Pokémon is now that Pokémon. (Any cards attached to this Pokémon, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "PLS";
  public name: string = "Ditto";
  public fullName: string = "Ditto PLS 108";
  public text: string = "Ditto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
