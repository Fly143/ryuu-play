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

export class InteleonVMAX_266 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Inteleon V";
  public hp: number = 320;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Double Gunner", powerType: PowerType.ABILITY, text: "You must discard a Water Energy card from your hand in order to use this Ability. Once during your turn, you may choose 2 of your opponent's Benched Pokémon and put 2 damage counters on each of them.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "G-Max Spiral", cost: [], damage: "70+", text: "You may put an Energy attached to this Pokémon into your hand. If you do, this attack does 70 more damage." }
  ];
  public set: string = "EVS";
  public name: string = "Inteleon VMAX";
  public fullName: string = "Inteleon VMAX EVS 266";
  public text: string = "Inteleon VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 70, 1);
    }
    return state;
  }
}
