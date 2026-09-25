import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class RocketSWobbuffet_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dark Aid", cost: [], damage: "", text: "Search your discard pile for Pokémon Tool cards and Rocket's Secret Machine cards. You may show either 1 Pokémon Tool card or Rocket's Secret Machine card to your opponent and put it into your hand, or show a combination of 3 Pokémon Tool cards or Rocket's Secret Machine cards to your opponent and shuffle them into your deck." },
      { name: "Amnesia", cost: [], damage: "10", text: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn." }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Wobbuffet";
  public fullName: string = "Rocket's Wobbuffet TRR 47";
  public text: string = "Rocket's Wobbuffet";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* metronome */ state;
    }
    return state;
  }
}
