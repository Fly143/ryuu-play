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

export class MegaFloetteEx_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 250;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gentle Light", cost: [], damage: "", text: "Heal 30 damage from each Pokémon (both yours and your opponent's)." },
      { name: "Eternity Bloom", cost: [], damage: "200", text: "Search your deck for up to 4 Basic Psychic Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck." }
  ];
  public set: string = "CRI";
  public name: string = "Mega Floette ex";
  public fullName: string = "Mega Floette ex CRI 101";
  public text: string = "Mega Floette ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
