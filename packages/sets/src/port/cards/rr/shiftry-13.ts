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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Shiftry_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nuzleaf";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Unlucky Wind", powerType: PowerType.ABILITY, text: "As long as Shiftry is your Active Pokémon, whenever your opponent flips a coin during his or her turn, treat it as tails.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Conform", cost: [], damage: "40", text: "If you have the same number of cards in your hand as your opponent, the Defending Pokémon is now Confused." },
      { name: "Seal Off", cost: [], damage: "60", text: "The Defending Pokémon can't use any Poké-Powers or Poké-Bodies during your opponent's next turn." }
  ];
  public set: string = "RR";
  public name: string = "Shiftry";
  public fullName: string = "Shiftry RR 13";
  public text: string = "Shiftry";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
