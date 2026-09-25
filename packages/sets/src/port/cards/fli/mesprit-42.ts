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

export class Mesprit_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Silent Waves", powerType: PowerType.ABILITY, text: "If you have Azelf in play, your opponent's Pokémon in play have no Resistance.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mind Splash", cost: [], damage: "20+", text: "If Uxie is on your Bench, this attack does 50 more damage." }
  ];
  public set: string = "FLI";
  public name: string = "Mesprit";
  public fullName: string = "Mesprit FLI 42";
  public text: string = "Mesprit";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    return state;
  }
}
