import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Togekiss_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Togetic";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bright Veil", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, whenever your opponent plays an Item card from his or her hand, prevent all effects of that card done to your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Return", cost: [], damage: "30", text: "Draw cards until you have 6 cards in your hand." }
  ];
  public set: string = "PLB";
  public name: string = "Togekiss";
  public fullName: string = "Togekiss PLB 104";
  public text: string = "Togekiss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* drawUntilHand:6 */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
