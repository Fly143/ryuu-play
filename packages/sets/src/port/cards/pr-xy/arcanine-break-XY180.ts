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

export class ArcanineBREAKXY180 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Arcanine";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Turbo Flame", cost: [], damage: "80", text: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon." }
  ];
  public set: string = "PR-XY";
  public name: string = "Arcanine BREAK";
  public fullName: string = "Arcanine BREAK PR-XY XY180";
  public text: string = "Arcanine BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
