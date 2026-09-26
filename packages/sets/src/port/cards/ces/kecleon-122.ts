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

export class Kecleon_122 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Unit Color 2", powerType: PowerType.ABILITY, text: "As long as this Pokémon has Unit Energy LightningPsychicMetal attached to it, it is a Lightning, Psychic, and Metal Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slash", cost: [], damage: "80", text: "" }
  ];
  public set: string = "CES";
  public name: string = "Kecleon";
  public fullName: string = "Kecleon CES 122";
  public text: string = "Kecleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
