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

export class ShiningNoctowl_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flashing Eyes", cost: [], damage: "30", text: "Flip 3 coins. If exactly 1 is heads, the Defending Pokémon is now Asleep. If exactly 2 are heads, the Defending Pokémon is now Confused. If all 3 are heads, the Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "N4";
  public name: string = "Shining Noctowl";
  public fullName: string = "Shining Noctowl N4 110";
  public text: string = "Shining Noctowl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
