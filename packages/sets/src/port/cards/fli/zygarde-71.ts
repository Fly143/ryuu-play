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

export class Zygarde_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Earthen Aura", powerType: PowerType.ABILITY, text: "Damage from this Pokémon's attacks isn't affected by Weakness or Resistance.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Peace Maker", cost: [], damage: "30+", text: "If your opponent has an Ultra Beast in play, this attack does 30 more damage." }
  ];
  public set: string = "FLI";
  public name: string = "Zygarde";
  public fullName: string = "Zygarde FLI 71";
  public text: string = "Zygarde";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    return state;
  }
}
