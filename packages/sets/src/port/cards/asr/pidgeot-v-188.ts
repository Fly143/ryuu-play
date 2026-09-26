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

export class PidgeotV_188 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Vanishing Wings", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is on your Bench, you may shuffle it and all attached cards into your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flight Surf", cost: [], damage: "80+", text: "If you have a Stadium in play, this attack does 80 more damage." }
  ];
  public set: string = "ASR";
  public name: string = "Pidgeot V";
  public fullName: string = "Pidgeot V ASR 188";
  public text: string = "Pidgeot V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    return state;
  }
}
