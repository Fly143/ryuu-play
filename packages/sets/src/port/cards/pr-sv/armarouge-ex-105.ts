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

export class ArmarougeEx_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charcadet";
  public hp: number = 260;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Armor Cannon", cost: [], damage: "200", text: "Discard a Fire Energy from this Pokémon." }
  ];
  public set: string = "PR-SV";
  public name: string = "Armarouge ex";
  public fullName: string = "Armarouge ex PR-SV 105";
  public text: string = "Armarouge ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
