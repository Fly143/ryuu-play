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

export class Moltres_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Assisting Heater", cost: [], damage: "30", text: "You may attach a Fire Energy card from your hand to 1 of your Benched Pokémon." },
      { name: "Fire Wing", cost: [], damage: "90", text: "" }
  ];
  public set: string = "DRM";
  public name: string = "Moltres";
  public fullName: string = "Moltres DRM 38";
  public text: string = "Moltres";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
