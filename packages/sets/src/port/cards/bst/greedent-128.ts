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

export class Greedent_128 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skwovet";
  public hp: number = 120;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Brazen Tail", powerType: PowerType.ABILITY, text: "Energy attached to your Pokémon can't be put into your hand, deck, or discard pile by an effect of your opponent's Item or Supporter cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gnaw", cost: [], damage: "90", text: "" }
  ];
  public set: string = "BST";
  public name: string = "Greedent";
  public fullName: string = "Greedent BST 128";
  public text: string = "Greedent";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
