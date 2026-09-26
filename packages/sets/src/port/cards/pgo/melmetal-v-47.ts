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

export class MelmetalV_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Arm Charge", cost: [], damage: "50", text: "You may attach a Metal Energy card from your hand to this Pokémon." },
      { name: "Mega Punch", cost: [], damage: "140", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Melmetal V";
  public fullName: string = "Melmetal V PGO 47";
  public text: string = "Melmetal V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
