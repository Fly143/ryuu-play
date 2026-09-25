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

export class Melmetal_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meltan";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wrack Down", cost: [], damage: "50", text: "" },
      { name: "Reforged Axe", cost: [], damage: "250", text: "Before doing damage, discard all Pokémon Tools from this Pokémon. If you can't discard any, this attack does nothing." }
  ];
  public set: string = "SCR";
  public name: string = "Melmetal";
  public fullName: string = "Melmetal SCR 104";
  public text: string = "Melmetal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
