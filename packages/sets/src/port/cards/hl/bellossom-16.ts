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

export class Bellossom_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gloom";
  public hp: number = 100;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Heal Dance", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may remove 2 damage counters from 1 of your Pokémon. You can't use more than 1 Heal Dance Poké-Power each turn. This power can't be used if Bellossom is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Miracle Powder", cost: [], damage: "10", text: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition." },
      { name: "Solarbeam", cost: [], damage: "50", text: "" }
  ];
  public set: string = "HL";
  public name: string = "Bellossom";
  public fullName: string = "Bellossom HL 16";
  public text: string = "Bellossom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
