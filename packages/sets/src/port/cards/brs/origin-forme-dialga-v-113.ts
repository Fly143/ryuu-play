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

export class OriginFormeDialgaV_113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 5.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Metal Coating", cost: [], damage: "", text: "Attach up to 2 Metal Energy cards from your discard pile to this Pokémon." },
      { name: "Temporal Rupture", cost: [], damage: "180", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Origin Forme Dialga V";
  public fullName: string = "Origin Forme Dialga V BRS 113";
  public text: string = "Origin Forme Dialga V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
