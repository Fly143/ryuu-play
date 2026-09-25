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

export class Regigigas_84a extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Seal of Antiquity", powerType: PowerType.ABILITY, text: "This Pokémon can't attack unless Regirock, Regice, and Registeel are on your Bench.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Giant Stomp", cost: [], damage: "160", text: "Discard any Stadium card in play." }
  ];
  public set: string = "CRI";
  public name: string = "Regigigas";
  public fullName: string = "Regigigas CRI 84a";
  public text: string = "Regigigas";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* discardStadium */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
