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

export class PikachuSM157 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pika Shield", powerType: PowerType.ABILITY, text: "This Pokémon can't be Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Static Shock", cost: [], damage: "10", text: "" }
  ];
  public set: string = "PR-SM";
  public name: string = "Pikachu";
  public fullName: string = "Pikachu PR-SM SM157";
  public text: string = "Pikachu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
