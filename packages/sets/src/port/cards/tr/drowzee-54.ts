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

export class Drowzee_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Long-Distance Hypnosis", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Asleep; if tails, your Active Pokémon is now Asleep. This power can't be used if Drowzee is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Nightmare", cost: [], damage: "10", text: "The Defending Pokémon is now Asleep." }
  ];
  public set: string = "TR";
  public name: string = "Drowzee";
  public fullName: string = "Drowzee TR 54";
  public text: string = "Drowzee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
