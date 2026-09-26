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

export class MManectricEX_24a extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Manectric-EX";
  public hp: number = 210;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Turbo Bolt", cost: [], damage: "110", text: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon." }
  ];
  public set: string = "PHF";
  public name: string = "M Manectric-EX";
  public fullName: string = "M Manectric-EX PHF 24a";
  public text: string = "M Manectric-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
