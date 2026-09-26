import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Abomasnow_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snover";
  public hp: number = 140;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Toughness Boost", powerType: PowerType.ABILITY, text: "Your Single Strike Pokémon in play, except any Abomasnow, get +50 HP. You can't apply more than 1 Toughness Boost Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mega Punch", cost: [], damage: "90", text: "" }
  ];
  public set: string = "BST";
  public name: string = "Abomasnow";
  public fullName: string = "Abomasnow BST 10";
  public text: string = "Abomasnow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
