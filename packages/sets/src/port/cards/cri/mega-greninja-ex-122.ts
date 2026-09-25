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

export class MegaGreninjaEx_122 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Frogadier";
  public hp: number = 350;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mortal Shuriken", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may discard a Basic Water Energy card from your hand in order to use this Ability. Place 6 damage counters on 1 of your opponent's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ninja Spinner", cost: [], damage: "120+", text: "You may put a Water Energy attached to this Pokémon into your hand and have this attack do 80 more damage." }
  ];
  public set: string = "CRI";
  public name: string = "Mega Greninja ex";
  public fullName: string = "Mega Greninja ex CRI 122";
  public text: string = "Mega Greninja ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 80);
    }
    return state;
  }
}
