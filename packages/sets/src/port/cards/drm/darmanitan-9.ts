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

export class Darmanitan_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Darumaka";
  public hp: number = 130;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Heat Assist", cost: [], damage: "", text: "Attach up to 3 Fire Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Darmani-Hands", cost: [], damage: "30+", text: "Flip 4 coins. This attack does 50 more damage for each heads." }
  ];
  public set: string = "DRM";
  public name: string = "Darmanitan";
  public fullName: string = "Darmanitan DRM 9";
  public text: string = "Darmanitan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 0);
    }
    return state;
  }
}
