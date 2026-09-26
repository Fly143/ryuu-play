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

export class Komala_149 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "All Just a Dream", powerType: PowerType.ABILITY, text: "If this Pokémon is Asleep and is Knocked Out by damage from an attack from your opponent's Pokémon, your opponent can't take any Prize cards for it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Collapse", cost: [], damage: "60", text: "This Pokémon is now Asleep." }
  ];
  public set: string = "ASR";
  public name: string = "Komala";
  public fullName: string = "Komala ASR 149";
  public text: string = "Komala";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
