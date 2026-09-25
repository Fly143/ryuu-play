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

export class PikachuVMAXSWSH286 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pikachu V";
  public hp: number = 310;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tail Charge", cost: [], damage: "30", text: "Attach up to 3 Lightning Energy cards from your discard pile to 1 of your Pokémon." },
      { name: "G-Max Thunder", cost: [], damage: "250", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Pikachu VMAX";
  public fullName: string = "Pikachu VMAX PR-SW SWSH286";
  public text: string = "Pikachu VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
