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

export class SnorlaxLVX_111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snorlax";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Big Appetite", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Snorlax is your Active Pokémon, you may draw cards until you have 6 cards in your hand. If you do, Snorlax is now Asleep. This power can't be used if Snorlax is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Exercise", cost: [], damage: "80", text: "You may discard as many Energy cards as you like from your hand. If you do, remove that many damage counters from Snorlax." }
  ];
  public set: string = "RR";
  public name: string = "Snorlax LV.X";
  public fullName: string = "Snorlax LV.X RR 111";
  public text: string = "Snorlax LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
