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

export class EthanSHoOhEx_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Golden Flame", powerType: PowerType.ABILITY, text: "Once during your turn, you may attach up to 2 Basic Fire Energy cards from your hand to 1 of your Benched Ethan's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shining Feathers", cost: [], damage: "160", text: "Heal 50 damage from each of your Pokémon." }
  ];
  public set: string = "DRI";
  public name: string = "Ethan's Ho-Oh ex";
  public fullName: string = "Ethan's Ho-Oh ex DRI 39";
  public text: string = "Ethan's Ho-Oh ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
