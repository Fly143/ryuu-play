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

export class Articuno_322 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blizzard Veil", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Benched Water Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cold Cyclone", cost: [], damage: "70", text: "Move 2 Water Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "UNB";
  public name: string = "Articuno";
  public fullName: string = "Articuno UNB 32";
  public text: string = "Articuno";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
