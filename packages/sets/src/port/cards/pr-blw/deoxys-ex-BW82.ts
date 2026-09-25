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

export class DeoxysEXBW82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power Connect", powerType: PowerType.ABILITY, text: "Your Team Plasma Pokémon's attacks (excluding Deoxys-EX) do 10 more damage to the Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Helix Force", cost: [], damage: "30+", text: "If this Pokémon has any Plasma Energy attached to it, this attack does 30 more damage for each Energy attached to the Defending Pokémon." }
  ];
  public set: string = "PR-BLW";
  public name: string = "Deoxys-EX";
  public fullName: string = "Deoxys-EX PR-BLW BW82";
  public text: string = "Deoxys-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* bonusPerEnergyDefending:30 */ state;
    }
    return state;
  }
}
