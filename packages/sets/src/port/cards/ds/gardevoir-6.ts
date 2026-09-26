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

export class Gardevoir_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kirlia";
  public hp: number = 100;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Jump", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may move an Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Rage", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each damage counter on Gardevoir to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Black Magic", cost: [], damage: "10+", text: "Does 10 damage plus 20 more damage times the number of your opponent's Benched Pokémon." }
  ];
  public set: string = "DS";
  public name: string = "Gardevoir δ";
  public fullName: string = "Gardevoir δ DS 6";
  public text: string = "Gardevoir δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
