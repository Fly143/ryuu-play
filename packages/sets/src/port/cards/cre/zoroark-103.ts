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

export class Zoroark_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zorua";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Phantom Transformation", powerType: PowerType.ABILITY, text: "Once during your turn, you may choose a Stage 1 Pokémon, except any Zoroark, from your discard pile. If you do, discard this Pokémon and all attached cards, and put the chosen Pokémon in its place.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Night Daze", cost: [], damage: "70", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Zoroark";
  public fullName: string = "Zoroark CRE 103";
  public text: string = "Zoroark";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* attachBasicFromDiscard */ state;
    }
    return state;
  }
}
