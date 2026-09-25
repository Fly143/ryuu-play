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

export class PurrloinRC13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Captivate", cost: [], damage: "", text: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with the Defending Pokémon." }
  ];
  public set: string = "PHF";
  public name: string = "Purrloin";
  public fullName: string = "Purrloin PHF RC13";
  public text: string = "Purrloin";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* flipHeadsGustOpponent */ state;
    }
    return state;
  }
}
