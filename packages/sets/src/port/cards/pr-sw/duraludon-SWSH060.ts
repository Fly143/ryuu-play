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

export class DuraludonSWSH060 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 3.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Metal Sharpener", cost: [], damage: "30", text: "Attach a Metal Energy card from your discard pile to 1 of your Pokémon." },
      { name: "Power Beam", cost: [], damage: "110", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Duraludon";
  public fullName: string = "Duraludon PR-SW SWSH060";
  public text: string = "Duraludon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
