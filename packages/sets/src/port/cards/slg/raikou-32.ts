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

export class Raikou_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Booming Thunder", cost: [], damage: "30", text: "Attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon." },
      { name: "Electric Ball", cost: [], damage: "90", text: "" }
  ];
  public set: string = "SLG";
  public name: string = "Raikou";
  public fullName: string = "Raikou SLG 32";
  public text: string = "Raikou";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
