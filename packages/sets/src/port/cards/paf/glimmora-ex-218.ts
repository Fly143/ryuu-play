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

export class GlimmoraEx_218 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Glimmet";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dust Field", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, your opponent can't have more than 3 Benched Pokémon. If they have 4 or more Benched Pokémon, they discard Benched Pokémon until they have 3 Pokémon on the Bench. If more than one effect changes the number of Benched Pokémon allowed, use the smaller number.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poisonous Gem", cost: [], damage: "140", text: "Your opponent's Active Pokémon is now Poisoned." }
  ];
  public set: string = "PAF";
  public name: string = "Glimmora ex";
  public fullName: string = "Glimmora ex PAF 218";
  public text: string = "Glimmora ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
