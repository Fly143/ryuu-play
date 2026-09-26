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

export class Cinderace_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Raboot";
  public hp: number = 160;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Explosiveness", powerType: PowerType.ABILITY, text: "If this Pokémon is in your hand when you are setting up to play, you may put it face down in the Active Spot.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Turbo Flare", cost: [], damage: "50", text: "Search your deck for up to 3 Basic Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck." }
  ];
  public set: string = "MEG";
  public name: string = "Cinderace";
  public fullName: string = "Cinderace MEG 28";
  public text: string = "Cinderace";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
