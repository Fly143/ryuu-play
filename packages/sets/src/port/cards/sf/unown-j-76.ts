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

export class UnownJ_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "JUNK", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Unown J from your hand onto your Bench, you may flip a coin. If heads, search your discard pile for a Trainer card, show it to your opponent, and put it into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "10", text: "Remove the Special Condition Asleep from the Defending Pokémon." }
  ];
  public set: string = "SF";
  public name: string = "Unown [J]";
  public fullName: string = "Unown [J] SF 76";
  public text: string = "Unown [J]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
