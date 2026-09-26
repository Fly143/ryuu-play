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

export class Drifblim_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drifloon";
  public hp: number = 100;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Drifting Balloon", powerType: PowerType.ABILITY, text: "This Pokémon's attacks cost Colorless less for each of your opponent's Team Plasma Pokémon in play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Derail", cost: [], damage: "70", text: "Discard a Special Energy attached to the Defending Pokémon." }
  ];
  public set: string = "FFI";
  public name: string = "Drifblim";
  public fullName: string = "Drifblim FFI 35";
  public text: string = "Drifblim";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
