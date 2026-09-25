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

export class MPidgeotEX_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pidgeot-EX";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mach Cyclone", cost: [], damage: "130", text: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon." }
  ];
  public set: string = "EVO";
  public name: string = "M Pidgeot-EX";
  public fullName: string = "M Pidgeot-EX EVO 65";
  public text: string = "M Pidgeot-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
