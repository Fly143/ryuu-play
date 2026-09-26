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

export class MegaLopunnyEx_84 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Buneary";
  public hp: number = 330;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gale Thrust", cost: [], damage: "60+", text: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 170 more damage." },
      { name: "Spiky Hopper", cost: [], damage: "160", text: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon." }
  ];
  public set: string = "PFL";
  public name: string = "Mega Lopunny ex";
  public fullName: string = "Mega Lopunny ex PFL 84";
  public text: string = "Mega Lopunny ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 170, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
