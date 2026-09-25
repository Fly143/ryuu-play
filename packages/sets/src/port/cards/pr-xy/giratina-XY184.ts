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

export class GiratinaXY184 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Devour Light", powerType: PowerType.ABILITY, text: "Each Pokémon BREAK has no Abilities (this includes Abilities of its previous Evolution).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shadow Claw", cost: [], damage: "110", text: "Discard a random card from your opponent's hand." }
  ];
  public set: string = "PR-XY";
  public name: string = "Giratina";
  public fullName: string = "Giratina PR-XY XY184";
  public text: string = "Giratina";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardOpponentHand(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
