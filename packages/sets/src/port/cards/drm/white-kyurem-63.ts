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

export class WhiteKyurem_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 3.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Field Crush", cost: [], damage: "30", text: "If your opponent has a Stadium card in play, discard it." },
      { name: "Freezing Flames", cost: [], damage: "80+", text: "If this Pokémon has any Fire Energy attached to it, this attack does 80 more damage." }
  ];
  public set: string = "DRM";
  public name: string = "White Kyurem";
  public fullName: string = "White Kyurem DRM 63";
  public text: string = "White Kyurem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    return state;
  }
}
