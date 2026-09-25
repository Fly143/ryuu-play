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

export class UmbreonDarkraiGX_125 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Black Lance", cost: [], damage: "150", text: "This attack does 60 damage to 1 of your opponent's Benched Pokémon-GX or Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Dark Moon-GX", cost: [], damage: "", text: "Your opponent can't play any Trainer cards from their hand during their next turn. If this Pokémon has at least 5 extra Darkness Energy attached to it (in addition to this attack's cost), your opponent's Active Pokémon is Knocked Out. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Umbreon & Darkrai-GX";
  public fullName: string = "Umbreon & Darkrai-GX CEC 125";
  public text: string = "Umbreon & Darkrai-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
