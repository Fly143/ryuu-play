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

export class WailordEx_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wailmer";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Super Deep Dive", cost: [], damage: "", text: "If you don't have any Benched Pokémon, this attack does nothing. Remove 3 damage counters from Wailord ex. Switch Wailord ex with 1 of your Benched Pokémon." },
      { name: "Dwindling Wave", cost: [], damage: "100-", text: "Does 100 damage minus 10 damage for each damage counter on Wailord ex." }
  ];
  public set: string = "SS";
  public name: string = "Wailord ex";
  public fullName: string = "Wailord ex SS 100";
  public text: string = "Wailord ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, Math.floor(effect.player.active.damage / 10));
    }
    return state;
  }
}
