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

export class Politoed_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poliwhirl";
  public hp: number = 120;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Leap Frog", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may choose a Water Pokémon on your Bench and switch it with your Active Pokémon. This power can't be used if Politoed is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Big Chorus", cost: [], damage: "30×", text: "Flip a coin for each Water Pokémon you have in play. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "UL";
  public name: string = "Politoed";
  public fullName: string = "Politoed UL 7";
  public text: string = "Politoed";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
