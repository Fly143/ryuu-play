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

export class Ditto_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sudden Transformation", powerType: PowerType.ABILITY, text: "This Pokémon can use the attacks of any Basic Pokémon in your discard pile, except for Pokémon with a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes). (You still need the necessary Energy to use each attack.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "PGO";
  public name: string = "Ditto";
  public fullName: string = "Ditto PGO 53";
  public text: string = "Ditto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
