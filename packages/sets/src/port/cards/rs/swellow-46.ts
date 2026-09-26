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

export class Swellow_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Taillow";
  public hp: number = 70;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Drive Off", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Swellow is your Active Pokémon, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. Your opponent picks the Benched Pokémon to switch. This power can't be used if Swellow is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wing Attack", cost: [], damage: "30", text: "" }
  ];
  public set: string = "RS";
  public name: string = "Swellow";
  public fullName: string = "Swellow RS 46";
  public text: string = "Swellow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
