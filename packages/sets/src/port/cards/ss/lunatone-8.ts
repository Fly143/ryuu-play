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

export class Lunatone_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lunar Eclipse", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Solrock is in play, you may use this power. Until the end of your turn, Lunatone's type is Darkness. This power can't be used if Lunatone is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cosmic Draw", cost: [], damage: "", text: "If your opponent has any Evolved Pokémon in play, draw 3 cards." },
      { name: "Lunar Blast", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SS";
  public name: string = "Lunatone";
  public fullName: string = "Lunatone SS 8";
  public text: string = "Lunatone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
