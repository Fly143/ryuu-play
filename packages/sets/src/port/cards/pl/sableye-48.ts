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

export class Sableye_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Overeager", powerType: PowerType.ABILITY, text: "If Sableye is your Active Pokémon at the beginning of the game, you go first. (If each player's Active Pokémon has the Overeager Poké-Body, this power does nothing.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Impersonate", cost: [], damage: "", text: "Search your deck for a Supporter card and discard it. Shuffle your deck afterward. Then, use the effect of that card as the effect of this attack." },
      { name: "Overconfident", cost: [], damage: "10", text: "If the Defending Pokémon has fewer remaining HP than Sableye, this attack's base damage is 40." }
  ];
  public set: string = "PL";
  public name: string = "Sableye";
  public fullName: string = "Sableye PL 48";
  public text: string = "Sableye";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
