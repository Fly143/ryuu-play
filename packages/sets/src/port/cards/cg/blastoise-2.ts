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

export class Blastoise_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wartortle";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shield Veil", powerType: PowerType.ABILITY, text: "Each of your Active Pokémon has no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Enraged Linear Attack", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each damage counter on Blastoise to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Skull Bash", cost: [], damage: "60", text: "" }
  ];
  public set: string = "CG";
  public name: string = "Blastoise δ";
  public fullName: string = "Blastoise δ CG 2";
  public text: string = "Blastoise δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
