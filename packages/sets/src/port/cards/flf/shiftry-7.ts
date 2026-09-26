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

export class Shiftry_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nuzleaf";
  public hp: number = 140;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Leaf Draw", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard a Grass Energy card from your hand. If you do, draw 3 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Deranged Dance", cost: [], damage: "20×", text: "This attack does 20 damage times the number of Benched Pokémon (both yours and your opponent's)." }
  ];
  public set: string = "FLF";
  public name: string = "Shiftry";
  public fullName: string = "Shiftry FLF 7";
  public text: string = "Shiftry";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 3);
    }
    return state;
  }
}
