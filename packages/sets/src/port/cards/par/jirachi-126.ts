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

export class Jirachi_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stellar Veil", powerType: PowerType.ABILITY, text: "Prevent all damage counters from being placed on your Benched Pokémon by effects of attacks used by your opponent's Basic Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Charge Energy", cost: [], damage: "", text: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." }
  ];
  public set: string = "PAR";
  public name: string = "Jirachi";
  public fullName: string = "Jirachi PAR 126";
  public text: string = "Jirachi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchEnergyToHand:2 */ state;
    }
    return state;
  }
}
