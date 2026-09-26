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

export class Pinsir_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gripthrow", cost: [], damage: "", text: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand." },
      { name: "Sever", cost: [], damage: "50+", text: "If the Defending Pokémon is a Stage 2 Pokémon, this attack does 50 damage plus 30 more damage." }
  ];
  public set: string = "SV";
  public name: string = "Pinsir";
  public fullName: string = "Pinsir SV 75";
  public text: string = "Pinsir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
