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

export class GiratinaLVXDP38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Giratina";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Invisible Tentacles", powerType: PowerType.ABILITY, text: "Whenever your opponent's Pokémon tries to attack, your opponent discards 1 card from his or her hand. (If your opponent can't discard 1 card, your opponent's Pokémon can't attack.) You can't use more than 1 Invisible Tentacles Poké-Body each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Darkness Lost", cost: [], damage: "", text: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If any of your opponent's Pokémon would be Knocked Out by damage from this attack, put that Pokémon and all cards attached to it in the Lost Zone instead of discarding it." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Giratina LV.X";
  public fullName: string = "Giratina LV.X PR-DPP DP38";
  public text: string = "Giratina LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
