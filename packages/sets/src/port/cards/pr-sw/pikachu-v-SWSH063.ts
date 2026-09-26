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

export class PikachuVSWSH063 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pika Ball", cost: [], damage: "30", text: "" },
      { name: "Circle Circuit", cost: [], damage: "30×", text: "This attack does 30 damage for each of your Benched Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Pikachu V";
  public fullName: string = "Pikachu V PR-SW SWSH063";
  public text: string = "Pikachu V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
