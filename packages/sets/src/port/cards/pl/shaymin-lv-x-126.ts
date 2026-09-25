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

export class ShayminLVX_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shaymin";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Thankfulness", powerType: PowerType.ABILITY, text: "Each of your Grass Pokémon (excluding any Shaymin) gets +40 HP. You can't use more than 1 Thankfulness Poké-Body each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Seed Flare", cost: [], damage: "40+", text: "Choose as many Grass Energy cards from your hand as you like and attach them to your Pokémon in any way you like. If you do, this attack does 40 damage plus 20 more damage for each Grass Energy attached in this way." }
  ];
  public set: string = "PL";
  public name: string = "Shaymin LV.X";
  public fullName: string = "Shaymin LV.X PL 126";
  public text: string = "Shaymin LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
