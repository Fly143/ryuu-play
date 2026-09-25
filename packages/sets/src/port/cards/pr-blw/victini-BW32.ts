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

export class VictiniBW32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Victory Star", powerType: PowerType.ABILITY, text: "Once during your turn, after you flip any coins for an attack, you may ignore all effects of those coin flips and begin flipping those coins again. You can't use more than 1 Victory Star Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Stored Power", cost: [], damage: "30", text: "Move all Energy attached to this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "PR-BLW";
  public name: string = "Victini";
  public fullName: string = "Victini PR-BLW BW32";
  public text: string = "Victini";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* moveAllEnergyToBench */ state;
    }
    return state;
  }
}
