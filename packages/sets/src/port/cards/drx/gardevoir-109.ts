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

export class Gardevoir_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kirlia";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psychic Mirage", powerType: PowerType.ABILITY, text: "Each basic Psychic Energy attached to your Psychic Pokémon provides PsychicPsychic Energy. You can't apply more than 1 Psychic Mirage Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mind Shock", cost: [], damage: "60", text: "This attack's damage isn't affected by Weakness or Resistance." }
  ];
  public set: string = "DRX";
  public name: string = "Gardevoir";
  public fullName: string = "Gardevoir DRX 109";
  public text: string = "Gardevoir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
