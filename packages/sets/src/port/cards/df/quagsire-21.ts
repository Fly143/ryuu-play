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

export class Quagsire_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wooper";
  public hp: number = 80;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dig Up", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Quagsire from your hand to evolve 1 of your Pokémon, you may search your discard pile for up to 2 Pokémon Tool cards, show them to your opponent, and put them into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pump Out", cost: [], damage: "50+", text: "If Quagsire has a Pokémon Tool card attached to it, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "DF";
  public name: string = "Quagsire δ";
  public fullName: string = "Quagsire δ DF 21";
  public text: string = "Quagsire δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
