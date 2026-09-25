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

export class PorygonZ_144 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Porygon2";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Buggy Turbo", powerType: PowerType.ABILITY, text: "Once during your turn, you may flip a coin. If heads, attach up to 4 Basic Energy cards from your discard pile to this Pokémon. If tails, discard an Energy from this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energized Attack", cost: [], damage: "40×", text: "This attack does 40 damage for each Energy attached to this Pokémon." }
  ];
  public set: string = "PAR";
  public name: string = "Porygon-Z";
  public fullName: string = "Porygon-Z PAR 144";
  public text: string = "Porygon-Z";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* attachBasicFromDiscard */ state;
    }
    return state;
  }
}
