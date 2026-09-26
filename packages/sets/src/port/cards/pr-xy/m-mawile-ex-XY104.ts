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

export class MMawileEXXY104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mawile-EX";
  public hp: number = 190;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Twin Grapple", cost: [], damage: "130", text: "Flip 2 coins. For each heads, discard an Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "PR-XY";
  public name: string = "M Mawile-EX";
  public fullName: string = "M Mawile-EX PR-XY XY104";
  public text: string = "M Mawile-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
