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

export class DialgaG_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Deafen", cost: [], damage: "10", text: "Your opponent can't play any Trainer cards or Stadium cards from his or her hand during your opponent's next turn." },
      { name: "Second Strike", cost: [], damage: "50+", text: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "PL";
  public name: string = "Dialga G";
  public fullName: string = "Dialga G PL 7";
  public text: string = "Dialga G";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
