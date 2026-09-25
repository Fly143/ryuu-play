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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Hippowdon_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hippopotas";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sand Cover", powerType: PowerType.ABILITY, text: "As long as Hippowdon is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon LV.X between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Save Sand", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each Energy attached to Hippowdon. Before doing damage, you may search your discard pile for a Fighting Energy card and attach it to Hippowdon." },
      { name: "Groundquake", cost: [], damage: "80", text: "Does 10 damage to each Benched Pokémon that isn't an Evolved Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon)." }
  ];
  public set: string = "RR";
  public name: string = "Hippowdon";
  public fullName: string = "Hippowdon RR 25";
  public text: string = "Hippowdon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
