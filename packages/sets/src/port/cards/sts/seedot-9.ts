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

export class Seedot_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bide", cost: [], damage: "", text: "Flip a coin. If heads, if this Pokémon would be Knocked Out by damage from an attack during your opponent's next turn, it is not Knocked Out and its remaining HP becomes 10 instead." }
  ];
  public set: string = "STS";
  public name: string = "Seedot";
  public fullName: string = "Seedot STS 9";
  public text: string = "Seedot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
