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

export class Delphox_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Braixen";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mystical Torch", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may leave your opponent's Active Pokémon Burned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Spin", cost: [], damage: "150", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "FLI";
  public name: string = "Delphox";
  public fullName: string = "Delphox FLI 17";
  public text: string = "Delphox";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
