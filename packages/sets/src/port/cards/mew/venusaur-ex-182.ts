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

export class VenusaurEx_182 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ivysaur";
  public hp: number = 340;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tranquil Flower", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may heal 60 damage from 1 of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dangerous Toxwhip", cost: [], damage: "150", text: "Your opponent's Active Pokémon is now Confused and Poisoned." }
  ];
  public set: string = "MEW";
  public name: string = "Venusaur ex";
  public fullName: string = "Venusaur ex MEW 182";
  public text: string = "Venusaur ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 60);
    }
    return state;
  }
}
