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
import { commonEffects } from '../../../common';

export class GroudonEx_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Frenzy", powerType: PowerType.ABILITY, text: "As long as your opponent has Kyogre, Kyogre ex, Rayquaza, or Rayquaza ex in play, Groudon ex's attacks do 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mix-Up", cost: [], damage: "30", text: "Flip a coin. If heads, your opponent discards the top card from his or her deck." },
      { name: "Earthquake", cost: [], damage: "60", text: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PR-NP";
  public name: string = "Groudon ex";
  public fullName: string = "Groudon ex PR-NP 38";
  public text: string = "Groudon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -10, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* plusPowerMarker:40 */ state;
    }
    return state;
  }
}
