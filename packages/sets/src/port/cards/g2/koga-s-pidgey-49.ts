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

export class KogaSPidgey_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Messenger", cost: [], damage: "", text: "Put Koga's Pidgey and all cards attached to it on top of your deck. Then search your deck for any Basic Pokémon or Evolution card not named Koga's Pidgey. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward." },
      { name: "Wing Attack", cost: [], damage: "20", text: "" }
  ];
  public set: string = "G2";
  public name: string = "Koga's Pidgey";
  public fullName: string = "Koga's Pidgey G2 49";
  public text: string = "Koga's Pidgey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
