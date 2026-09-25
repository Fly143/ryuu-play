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

export class Smeargle_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Paint", cost: [], damage: "", text: "Flip a coin. If heads, choose a type (other than Colorless) and put a Coloring counter on the Defending Pokémon. That Pokémon is now the type you chose. If it already had a Coloring counter, remove the old one. If tails, this attack does nothing." }
  ];
  public set: string = "BP";
  public name: string = "Smeargle";
  public fullName: string = "Smeargle BP 32";
  public text: string = "Smeargle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
