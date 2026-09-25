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

export class Huntail_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clamperl";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Reactive Generator", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Huntail has no React Energy cards attached to it, you may search your deck for a React Energy card and attach it to Huntail. Shuffle your deck afterward. This power can't be used if Huntail is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bite Off", cost: [], damage: "40+", text: "If the Defending Pokémon is Pokémon-ex, this attack does 40 damage plus 30 more damage." }
  ];
  public set: string = "LM";
  public name: string = "Huntail";
  public fullName: string = "Huntail LM 18";
  public text: string = "Huntail";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
