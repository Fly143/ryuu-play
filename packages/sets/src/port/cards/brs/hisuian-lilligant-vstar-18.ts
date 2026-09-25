import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class HisuianLilligantVSTAR_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hisuian Lilligant V";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Star Perfume", powerType: PowerType.ABILITY, text: "During your turn, you may search your deck for up to 5 in any combination of Grass Pokémon and Grass Energy cards, reveal them, and put them into your hand. Then, shuffle your deck. (You can't use more than 1 VSTAR Power in a game.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Parallel Spin", cost: [], damage: "130+", text: "You may put an Energy attached to this Pokémon into your hand. If you do, this attack does 100 more damage." }
  ];
  public set: string = "BRS";
  public name: string = "Hisuian Lilligant VSTAR";
  public fullName: string = "Hisuian Lilligant VSTAR BRS 18";
  public text: string = "Hisuian Lilligant VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
