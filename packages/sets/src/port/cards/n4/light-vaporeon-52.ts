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

export class LightVaporeon_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wash Away", cost: [], damage: "", text: "If you have any Benched Pokémon, flip a coin. If heads, remove all damage counters from 1 of your Benched Pokémon and discard all Energy cards attached to it." },
      { name: "Hypnoshower", cost: [], damage: "30", text: "The Defending Pokémon is now Asleep. Remove 1 damage counter from each Benched Pokémon (yours and your opponent's) with any damage counters on it." }
  ];
  public set: string = "N4";
  public name: string = "Light Vaporeon";
  public fullName: string = "Light Vaporeon N4 52";
  public text: string = "Light Vaporeon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
