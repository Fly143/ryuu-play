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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AlolanExeggutorGX_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tropical Head", cost: [], damage: "", text: "This attack does 20 damage times the amount of Energy attached to this Pokémon to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Dragon Hammer", cost: [], damage: "120", text: "Your opponent's Active Pokémon is now Confused." },
      { name: "Tower-Go-Round-GX", cost: [], damage: "180", text: "Move any number of Energy from your Pokémon to your other Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CRI";
  public name: string = "Alolan Exeggutor-GX";
  public fullName: string = "Alolan Exeggutor-GX CRI 107";
  public text: string = "Alolan Exeggutor-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
