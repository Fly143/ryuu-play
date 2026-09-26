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

export class Seismitoad_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Palpitoad";
  public hp: number = 170;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shaky Wave", cost: [], damage: "60", text: "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more, and its Retreat Cost is Colorless more." },
      { name: "Hyper Voice", cost: [], damage: "160", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Seismitoad";
  public fullName: string = "Seismitoad CRE 90";
  public text: string = "Seismitoad";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
