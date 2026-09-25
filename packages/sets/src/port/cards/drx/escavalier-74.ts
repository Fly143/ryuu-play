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

export class Escavalier_74 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Karrablast";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Joust", cost: [], damage: "30", text: "Before doing damage, discard a Pokémon Tool card attached to the Defending Pokémon." },
      { name: "Cavalry Lance", cost: [], damage: "70", text: "During your opponent's next turn, this Pokémon has no Weakness." }
  ];
  public set: string = "DRX";
  public name: string = "Escavalier";
  public fullName: string = "Escavalier DRX 74";
  public text: string = "Escavalier";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* noWeaknessNextTurn */ state;
    }
    return state;
  }
}
