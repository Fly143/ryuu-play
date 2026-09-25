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

export class Turtonator_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Explosive Jet", cost: [], damage: "50×", text: "Discard any amount of Fire Energy from your Pokémon. This attack does 50 damage for each card you discarded in this way." }
  ];
  public set: string = "DRM";
  public name: string = "Turtonator";
  public fullName: string = "Turtonator DRM 50";
  public text: string = "Turtonator";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
