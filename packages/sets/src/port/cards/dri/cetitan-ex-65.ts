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

export class CetitanEx_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cetoddle";
  public hp: number = 300;
    public height?: number = 2.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Snow Camouflage", powerType: PowerType.ABILITY, text: "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crushing Press", cost: [], damage: "140+", text: "You may discard a Stadium in play. If you do, this attack does 140 more damage." }
  ];
  public set: string = "DRI";
  public name: string = "Cetitan ex";
  public fullName: string = "Cetitan ex DRI 65";
  public text: string = "Cetitan ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 140, 1);
    }
    return state;
  }
}
