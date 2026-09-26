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

export class ShiningHoOhSM70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 3.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Golden Wing", powerType: PowerType.ABILITY, text: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, move up to 2 basic Energy cards from this Pokémon to your Benched Pokémon in any way you like.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Blast", cost: [], damage: "110", text: "Discard an Energy from this Pokémon." }
  ];
  public set: string = "PR-SM";
  public name: string = "Shining Ho-Oh";
  public fullName: string = "Shining Ho-Oh PR-SM SM70";
  public text: string = "Shining Ho-Oh";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
