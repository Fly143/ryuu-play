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

export class Ninjask_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nincada";
  public hp: number = 80;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cast-off Shell", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Ninjask from your hand to evolve 1 of your Pokémon and if your Bench isn't full, you may put Shedinja onto your Bench as a Basic Pokémon from your hand or your discard pile.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Chip Off", cost: [], damage: "30", text: "If your opponent has 6 or more cards in his or her hand, discard a number of cards without looking until your opponent has 5 cards left in his or her hand." }
  ];
  public set: string = "SF";
  public name: string = "Ninjask";
  public fullName: string = "Ninjask SF 67";
  public text: string = "Ninjask";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
