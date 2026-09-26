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

export class DrifblimFB_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pump Up", powerType: PowerType.ABILITY, text: "If your opponent has 3 or less Prize cards left, Drifblim FB gets +40 HP.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shadow Ball", cost: [], damage: "", text: "Choose 1 of your opponent's Benched Pokémon. This attack does 40 damage to that Pokémon. Apply Weakness and Resistance." }
  ];
  public set: string = "SV";
  public name: string = "Drifblim FB";
  public fullName: string = "Drifblim FB SV 3";
  public text: string = "Drifblim FB";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
