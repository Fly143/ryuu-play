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

export class Heracross_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shining Horn", powerType: PowerType.ABILITY, text: "As long as Heracross is the only Pokémon you have in play, your opponent's Basic Pokémon can't attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dig Deep", cost: [], damage: "", text: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand." },
      { name: "Extra Claws", cost: [], damage: "30+", text: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 20 more damage." }
  ];
  public set: string = "DF";
  public name: string = "Heracross δ";
  public fullName: string = "Heracross δ DF 3";
  public text: string = "Heracross δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
