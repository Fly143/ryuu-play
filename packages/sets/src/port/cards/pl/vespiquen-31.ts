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

export class Vespiquen_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Combee";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Green Dignity", powerType: PowerType.ABILITY, text: "As long as you have more Prize cards left than your opponent, Vespiquen's attacks do 10 more damage for each Grass Pokémon on your Bench to the Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bee Drain", cost: [], damage: "20", text: "After your attack, remove from Vespiquen the number of damage counters equal to the damage you did to the Defending Pokémon." },
      { name: "Bee Powder", cost: [], damage: "50", text: "Flip 2 coins. If both are heads, the Defending Pokémon is now Burned, Paralyzed, and Poisoned." }
  ];
  public set: string = "PL";
  public name: string = "Vespiquen";
  public fullName: string = "Vespiquen PL 31";
  public text: string = "Vespiquen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAfterAttack(this, store, state, effect).use(effect, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* plusPowerMarker:10 */ state;
    }
    return state;
  }
}
