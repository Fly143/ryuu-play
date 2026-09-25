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

export class HydreigonSWSH037 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zweilous";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Squall", powerType: PowerType.ABILITY, text: "As often as you like during your turn, you may attach a Darkness Energy card from your hand to 1 of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pitch-Black Fangs", cost: [], damage: "130", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Hydreigon";
  public fullName: string = "Hydreigon PR-SW SWSH037";
  public text: string = "Hydreigon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* oncePerTurnAttachFromHand */ state;
    }
    return state;
  }
}
