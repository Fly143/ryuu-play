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

export class Azurill_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Marill from your hand onto Azurill (this counts as evolving Azurill) and remove all damage counters from Azurill.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Type Match", cost: [], damage: "", text: "Choose a basic Energy card in your hand and show it to your opponent. Then, search your deck for a Basic Pokémon or Evolution card of that Energy type, show it to your opponent, and put it into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "DS";
  public name: string = "Azurill";
  public fullName: string = "Azurill DS 20";
  public text: string = "Azurill";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
