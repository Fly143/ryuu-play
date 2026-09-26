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

export class ScizorV_118 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hack Off", cost: [], damage: "30", text: "Discard a Pokémon Tool and a Special Energy from your opponent's Active Pokémon." },
      { name: "Slashing Claw", cost: [], damage: "140", text: "" }
  ];
  public set: string = "DAA";
  public name: string = "Scizor V";
  public fullName: string = "Scizor V DAA 118";
  public text: string = "Scizor V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
