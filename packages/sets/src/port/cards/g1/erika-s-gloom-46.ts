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

export class ErikaSGloom_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Erika's Oddish";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dream Dance", cost: [], damage: "10", text: "Both the Defending Pokémon and Erika's Gloom are now Asleep (after doing damage)." },
      { name: "Vile Smell", cost: [], damage: "30", text: "Both the Defending Pokémon and Erika's Gloom are now Confused (after doing damage)." }
  ];
  public set: string = "G1";
  public name: string = "Erika's Gloom";
  public fullName: string = "Erika's Gloom G1 46";
  public text: string = "Erika's Gloom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
