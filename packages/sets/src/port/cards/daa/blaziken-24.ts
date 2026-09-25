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

export class Blaziken_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Combusken";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Double Type", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in play, it is Fire and Fighting type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Turbo Drive", cost: [], damage: "130", text: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon." }
  ];
  public set: string = "DAA";
  public name: string = "Blaziken";
  public fullName: string = "Blaziken DAA 24";
  public text: string = "Blaziken";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
