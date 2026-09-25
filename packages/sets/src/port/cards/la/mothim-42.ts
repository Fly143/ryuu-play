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
import { commonEffects } from '../../../common';

export class Mothim_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Burmy";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Disturbance Scales", powerType: PowerType.ABILITY, text: "Any damage done by attacks from your Pokémon to the Defending Pokémon isn't affected by Resistance.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Get Help", cost: [], damage: "30×", text: "Does 30 damage times the number of different types of Wormadam on your Bench." },
      { name: "Quick Touch", cost: [], damage: "40", text: "You may switch Mothim with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Mothim as you like to the new Active Pokémon." }
  ];
  public set: string = "LA";
  public name: string = "Mothim";
  public fullName: string = "Mothim LA 42";
  public text: string = "Mothim";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
