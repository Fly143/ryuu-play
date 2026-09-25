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

export class Mewtwo_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Delta Switch", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Mewtwo from your hand onto your Bench, you may move any number of basic Energy cards attached to your Pokémon to your other Pokémon (excluding Mewtwo) in any way you like.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Burst", cost: [], damage: "10×", text: "Does 10 damage times the total amount of Energy attached to Mewtwo and the Defending Pokémon." }
  ];
  public set: string = "DS";
  public name: string = "Mewtwo δ";
  public fullName: string = "Mewtwo δ DS 12";
  public text: string = "Mewtwo δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* damageTimesEnergyBoth:10 */ state;
    }
    return state;
  }
}
