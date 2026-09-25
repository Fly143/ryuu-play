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

export class WhimsicottGX_206 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cottonee";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fluffy Cotton", powerType: PowerType.ABILITY, text: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Blow", cost: [], damage: "10+", text: "This attack does 30 more damage times the amount of Energy attached to this Pokémon." },
      { name: "Toy Box-GX", cost: [], damage: "", text: "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UNM";
  public name: string = "Whimsicott-GX";
  public fullName: string = "Whimsicott-GX UNM 206";
  public text: string = "Whimsicott-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:5");
    }
    return state;
  }
}
