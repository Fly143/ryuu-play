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

export class RampardosEx_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cranidos";
  public hp: number = 330;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Destructive Headbutting", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rowdy Hammer", cost: [], damage: "150", text: "During your next turn, attacks used by this Pokémon do 150 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." }
  ];
  public set: string = "PBL";
  public name: string = "Rampardos ex";
  public fullName: string = "Rampardos ex PBL 45";
  public text: string = "Rampardos ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 150);
    }
    return state;
  }
}
