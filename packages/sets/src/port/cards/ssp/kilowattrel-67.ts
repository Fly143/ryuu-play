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

export class Kilowattrel_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wattrel";
  public hp: number = 120;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Glide", cost: [], damage: "50", text: "" },
      { name: "Storm Bolt", cost: [], damage: "160", text: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like." }
  ];
  public set: string = "SSP";
  public name: string = "Kilowattrel";
  public fullName: string = "Kilowattrel SSP 67";
  public text: string = "Kilowattrel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
