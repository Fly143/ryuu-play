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

export class TangrowthLVX_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tangrowth";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Healing Growth", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, remove 4 damage counters from 1 of your Pokémon. This power can't be used if Tangrowth is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Big Growth", cost: [], damage: "", text: "Search your discard pile for as many Grass Energy cards as you like and attach them to your Pokémon in any way you like." }
  ];
  public set: string = "AR";
  public name: string = "Tangrowth LV.X";
  public fullName: string = "Tangrowth LV.X AR 99";
  public text: string = "Tangrowth LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
