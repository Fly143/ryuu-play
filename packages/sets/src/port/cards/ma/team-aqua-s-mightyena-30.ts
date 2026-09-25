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

export class TeamAquaSMightyena_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Poochyena";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Aqua Call", cost: [], damage: "", text: "Search your deck for Pokémon that has Team Aqua in its name, show up to 3 of them to your opponent, and put them into your hand. Shuffle your deck afterward." },
      { name: "Wave Splash", cost: [], damage: "30", text: "" }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Mightyena";
  public fullName: string = "Team Aqua's Mightyena MA 30";
  public text: string = "Team Aqua's Mightyena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
