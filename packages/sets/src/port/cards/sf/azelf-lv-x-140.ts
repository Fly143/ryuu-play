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

export class AzelfLVX_140 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Azelf";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psychic Aura", powerType: PowerType.ABILITY, text: "Each of your Psychic Pokémon has no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Deep Balance", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. Put 1 damage counter on that Pokémon for each Energy attached to all of your opponent's Pokémon." }
  ];
  public set: string = "SF";
  public name: string = "Azelf LV.X";
  public fullName: string = "Azelf LV.X SF 140";
  public text: string = "Azelf LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
