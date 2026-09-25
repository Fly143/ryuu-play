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

export class EldegossSV011 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gossifleur";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Blessing of Fluff", cost: [], damage: "", text: "Search your deck for up to 3 Grass Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck." },
      { name: "Leafage", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Eldegoss";
  public fullName: string = "Eldegoss SHF SV011";
  public text: string = "Eldegoss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
