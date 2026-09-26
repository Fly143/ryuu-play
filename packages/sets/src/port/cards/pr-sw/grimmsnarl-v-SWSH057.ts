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

export class GrimmsnarlVSWSH057 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "40", text: "" },
      { name: "Spiky Knuckle", cost: [], damage: "200", text: "Put 2 Darkness Energy attached to this Pokémon into your hand." }
  ];
  public set: string = "PR-SW";
  public name: string = "Grimmsnarl V";
  public fullName: string = "Grimmsnarl V PR-SW SWSH057";
  public text: string = "Grimmsnarl V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
