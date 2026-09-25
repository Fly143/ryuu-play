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

export class ChandelureVMAX_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chandelure V";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cursed Shimmer", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, your opponent can't play any Pokémon Tool cards from their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Max Poltergeist", cost: [], damage: "70×", text: "Your opponent reveals their hand. This attack does 70 damage for each Trainer card you find there." }
  ];
  public set: string = "EVS";
  public name: string = "Chandelure VMAX";
  public fullName: string = "Chandelure VMAX EVS 40";
  public text: string = "Chandelure VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
