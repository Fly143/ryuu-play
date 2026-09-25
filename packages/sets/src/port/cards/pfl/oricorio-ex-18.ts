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

export class OricorioEx_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Excited Turbo", powerType: PowerType.ABILITY, text: "As often as you like during your turn, if you have any Fire Mega Evolution Pokémon ex in play, you may use this Ability. Attach a Basic Fire Energy card from your hand to 1 of your Benched Fire Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Wing", cost: [], damage: "110", text: "" }
  ];
  public set: string = "PFL";
  public name: string = "Oricorio ex";
  public fullName: string = "Oricorio ex PFL 18";
  public text: string = "Oricorio ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* oncePerTurnAttachFromHand */ state;
    }
    return state;
  }
}
