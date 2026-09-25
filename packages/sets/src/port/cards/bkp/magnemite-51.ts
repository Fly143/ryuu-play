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

export class Magnemite_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sparkling Induction", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, its Retreat Cost is Colorless less for each Magnemite on your Bench.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lightning Ball", cost: [], damage: "20", text: "" }
  ];
  public set: string = "BKP";
  public name: string = "Magnemite";
  public fullName: string = "Magnemite BKP 51";
  public text: string = "Magnemite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
