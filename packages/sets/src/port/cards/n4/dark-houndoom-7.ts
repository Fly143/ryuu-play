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

export class DarkHoundoom_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Houndour";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Eerie Howl", cost: [], damage: "", text: "If your opponent's Bench isn't full, look at his or her hand. If your opponent has any Baby Pokémon or Basic Pokémon there, choose 1 of them and put it on his or her Bench. Then, switch it with the Defending Pokémon." },
      { name: "Dark Fire", cost: [], damage: "30+", text: "If there are any Darkness Energy cards attached to Dark Houndoom, discard 1 of them and this attack does 30 damage plus 20 more damage (plus 10 more damage for the Darkness Energy you discarded). If there aren't any, this attack does 30 damage." }
  ];
  public set: string = "N4";
  public name: string = "Dark Houndoom";
  public fullName: string = "Dark Houndoom N4 7";
  public text: string = "Dark Houndoom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
