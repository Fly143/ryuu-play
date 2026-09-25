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

export class MukEx_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grimer";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Toxic Gas", powerType: PowerType.ABILITY, text: "As long as Muk ex is your Active Pokémon, ignore all Poké-Powers and Poké-Bodies other than Toxic Gas.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Breath", cost: [], damage: "10", text: "The Defending Pokémon is now Poisoned." },
      { name: "Slimy Water", cost: [], damage: "40+", text: "Does 40 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost)." }
  ];
  public set: string = "DR";
  public name: string = "Muk ex";
  public fullName: string = "Muk ex DR 96";
  public text: string = "Muk ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
