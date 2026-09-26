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

export class Nidoking_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidorino";
  public hp: number = 140;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pheromone Stamina", powerType: PowerType.ABILITY, text: "Nidoking gets +20 HP for each Nidoqueen you have in play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Venomous Horn", cost: [], damage: "80", text: "The Defending Pokémon is now Poisoned." }
  ];
  public set: string = "TM";
  public name: string = "Nidoking";
  public fullName: string = "Nidoking TM 6";
  public text: string = "Nidoking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
