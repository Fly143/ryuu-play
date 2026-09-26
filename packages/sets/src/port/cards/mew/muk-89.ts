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

export class Muk_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grimer";
  public hp: number = 150;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sticky Jail", cost: [], damage: "30", text: "During your opponent's next turn, attacks used by the Defending Pokémon cost Colorless more, and its Retreat Cost is Colorless more." },
      { name: "Sludge Bomb", cost: [], damage: "180", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Muk";
  public fullName: string = "Muk MEW 89";
  public text: string = "Muk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
