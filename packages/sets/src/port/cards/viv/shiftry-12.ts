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

export class Shiftry_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nuzleaf";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shifty Substitution", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, each Supporter card in your opponent's hand has the effect \"Draw 3 cards.\" (This happens instead of the card's usual effect.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fan Tornado", cost: [], damage: "110", text: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon." }
  ];
  public set: string = "VIV";
  public name: string = "Shiftry";
  public fullName: string = "Shiftry VIV 12";
  public text: string = "Shiftry";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
