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

export class Solrock_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Solar Eclipse", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Lunatone is in play, you may use this power. Until the end of your turn, Solrock's type is Fire. This power can't be used if Solrock is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cosmic Draw", cost: [], damage: "", text: "If your opponent has any Evolved Pokémon in play, draw 3 cards." },
      { name: "Solar Blast", cost: [], damage: "40", text: "" }
  ];
  public set: string = "SS";
  public name: string = "Solrock";
  public fullName: string = "Solrock SS 13";
  public text: string = "Solrock";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
