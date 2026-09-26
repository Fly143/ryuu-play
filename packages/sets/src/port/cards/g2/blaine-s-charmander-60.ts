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

export class BlaineSCharmander_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fire Tail Slap", cost: [], damage: "20", text: "Use this attack only if there are any Fire Energy cards attached to Blaine's Charmander. Flip a coin. If tails, discard 1 of those cards." }
  ];
  public set: string = "G2";
  public name: string = "Blaine's Charmander";
  public fullName: string = "Blaine's Charmander G2 60";
  public text: string = "Blaine's Charmander";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
