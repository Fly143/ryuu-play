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

export class MagearnaEX_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mystic Heart", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon that has any Metal Energy attached to it. (Existing effects are not removed.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Soul Blaster", cost: [], damage: "120", text: "During your next turn, this Pokémon's Soul Blaster attack's base damage is 60." }
  ];
  public set: string = "STS";
  public name: string = "Magearna-EX";
  public fullName: string = "Magearna-EX STS 110";
  public text: string = "Magearna-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
