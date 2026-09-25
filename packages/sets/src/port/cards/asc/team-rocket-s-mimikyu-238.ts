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

export class TeamRocketSMimikyu_238 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gemstone Mimicry", cost: [], damage: "", text: "Choose 1 of your opponent's Active Tera Pokémon's attacks and use it as this attack." }
  ];
  public set: string = "ASC";
  public name: string = "Team Rocket's Mimikyu";
  public fullName: string = "Team Rocket's Mimikyu ASC 238";
  public text: string = "Team Rocket's Mimikyu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* copyAttack */ state;
    }
    return state;
  }
}
