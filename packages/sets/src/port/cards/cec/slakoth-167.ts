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

export class Slakoth_167 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lazy Howl", cost: [], damage: "", text: "During your opponent's next turn, if they attach an Energy card from their hand to the Defending Pokémon, their turn ends." },
      { name: "Hang Down", cost: [], damage: "20", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Slakoth";
  public fullName: string = "Slakoth CEC 167";
  public text: string = "Slakoth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
