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

export class Cherrim_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cherubi";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Weather Guard", powerType: PowerType.ABILITY, text: "Your Grass Pokémon have no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Seed Bomb", cost: [], damage: "30", text: "" }
  ];
  public set: string = "UPR";
  public name: string = "Cherrim";
  public fullName: string = "Cherrim UPR 11";
  public text: string = "Cherrim";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
