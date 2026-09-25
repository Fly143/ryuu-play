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

export class AerodactylEx_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mysterious Fossil";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Primal Lock", powerType: PowerType.ABILITY, text: "As long as Aerodactyl ex is in play, your opponent can't play Pokémon Tool cards. Remove any Pokémon Tool cards attached to your opponent's Pokémon and put them into his or her discard pile.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Supersonic", cost: [], damage: "10", text: "The Defending Pokémon is now Confused." },
      { name: "Wing Attack", cost: [], damage: "60", text: "" }
  ];
  public set: string = "SS";
  public name: string = "Aerodactyl ex";
  public fullName: string = "Aerodactyl ex SS 94";
  public text: string = "Aerodactyl ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
