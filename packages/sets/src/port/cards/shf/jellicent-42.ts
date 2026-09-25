import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Jellicent_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Frillish";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sediment Sink", cost: [], damage: "10×", text: "This attack does 10 damage for each Water Energy card in your discard pile." }
  ];
  public set: string = "SHF";
  public name: string = "Jellicent";
  public fullName: string = "Jellicent SHF 42";
  public text: string = "Jellicent";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* damageTimesDiscardPokemon:10 */ state;
    }
    return state;
  }
}
