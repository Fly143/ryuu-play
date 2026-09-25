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

export class DragoniteFB_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mach Blow", cost: [], damage: "20", text: "If the Defending Pokémon is a Pokémon SP, this attack's base damage is 80 instead of 20." },
      { name: "Giant Tail", cost: [], damage: "100", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "SV";
  public name: string = "Dragonite FB";
  public fullName: string = "Dragonite FB SV 56";
  public text: string = "Dragonite FB";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
