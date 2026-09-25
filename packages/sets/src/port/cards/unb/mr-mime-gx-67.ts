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

export class MrMimeGX_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magic Odds", powerType: PowerType.ABILITY, text: "Prevent all damage done to this Pokémon by your opponent's attacks if that damage is exactly 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, or 250.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Breakdown", cost: [], damage: "", text: "For each card in your opponent's hand, put 1 damage counter on their Active Pokémon." },
      { name: "Life Trick-GX", cost: [], damage: "", text: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UNB";
  public name: string = "Mr. Mime-GX";
  public fullName: string = "Mr. Mime-GX UNB 67";
  public text: string = "Mr. Mime-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
