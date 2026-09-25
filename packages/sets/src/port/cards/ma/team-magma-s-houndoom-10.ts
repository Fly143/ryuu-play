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

export class TeamMagmaSHoundoom_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Houndour";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Roasting Heat", cost: [], damage: "30+", text: "If the Defending Pokémon is Burned, this attack does 30 damage plus 20 more damage." },
      { name: "Magma Spurt", cost: [], damage: "30×", text: "Discard the top 5 cards from your deck. This attack does 30 damage times the number of Fire and Fighting basic Energy cards discarded in this way." }
  ];
  public set: string = "MA";
  public name: string = "Team Magma's Houndoom";
  public fullName: string = "Team Magma's Houndoom MA 10";
  public text: string = "Team Magma's Houndoom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
