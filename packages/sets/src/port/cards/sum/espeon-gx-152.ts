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

export class EspeonGX_152 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psybeam", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Confused." },
      { name: "Psychic", cost: [], damage: "60+", text: "This attack does 30 more damage times the number of Energy attached to your opponent's Active Pokémon." },
      { name: "Divide-GX", cost: [], damage: "", text: "Put 10 damage counters on your opponent's Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "SUM";
  public name: string = "Espeon-GX";
  public fullName: string = "Espeon-GX SUM 152";
  public text: string = "Espeon-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
