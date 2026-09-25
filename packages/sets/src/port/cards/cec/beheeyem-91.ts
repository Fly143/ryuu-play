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

export class Beheeyem_91 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Elgyem";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psypunch", cost: [], damage: "20", text: "" },
      { name: "Mysterious Noise", cost: [], damage: "90", text: "Shuffle this Pokémon and all cards attached to it into your deck. Your opponent can't play any Item cards from their hand during their next turn." }
  ];
  public set: string = "CEC";
  public name: string = "Beheeyem";
  public fullName: string = "Beheeyem CEC 91";
  public text: string = "Beheeyem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
