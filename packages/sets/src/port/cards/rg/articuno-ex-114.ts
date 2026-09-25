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

export class ArticunoEx_114 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Legendary Ascent", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Articuno ex from your hand onto your Bench, you may switch 1 of your Active Pokémon with Articuno ex. If you do, you may also move any number of basic Water Energy cards attached to your Pokémon to Articuno ex.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cold Crush", cost: [], damage: "50", text: "You may discard an Energy card attached to Articuno ex. If you do, your opponent discards an Energy card attached to the Defending Pokémon." }
  ];
  public set: string = "RG";
  public name: string = "Articuno ex";
  public fullName: string = "Articuno ex RG 114";
  public text: string = "Articuno ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
