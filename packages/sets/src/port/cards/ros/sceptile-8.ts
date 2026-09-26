import {
  Effect,
  State,
  StoreLike,
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

export class Sceptile_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grovyle";
  public hp: number = 130;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Nurture and Heal", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may attach a Grass Energy card from your hand to 1 of your Pokémon. If you do, heal 30 damage from that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Jungle Edge", cost: [], damage: "70", text: "" }
  ];
  public set: string = "ROS";
  public name: string = "Sceptile";
  public fullName: string = "Sceptile ROS 8";
  public text: string = "Sceptile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 30);
    }
    return state;
  }
}
