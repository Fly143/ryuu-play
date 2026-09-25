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

export class Mightyena_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poochyena";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Plunder", cost: [], damage: "30", text: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon." },
      { name: "Dark Burst", cost: [], damage: "50+", text: "If Sidney's Stadium is in play, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "PK";
  public name: string = "Mightyena";
  public fullName: string = "Mightyena PK 18";
  public text: string = "Mightyena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
