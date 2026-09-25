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

export class Dunsparce_207 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mysterious Nest", powerType: PowerType.ABILITY, text: "Colorless Pokémon in play (both yours and your opponent's) have no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rollout", cost: [], damage: "30", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Dunsparce";
  public fullName: string = "Dunsparce EVS 207";
  public text: string = "Dunsparce";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
