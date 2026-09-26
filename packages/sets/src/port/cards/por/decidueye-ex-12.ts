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

export class DecidueyeEx_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dartrix";
  public hp: number = 320;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sniper's Eye", powerType: PowerType.ABILITY, text: "If your opponent has exactly 4 cards in their hand, ignore all Colorless Energy in the costs of attacks used by this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crushing Arrow", cost: [], damage: "240", text: "Discard an Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "POR";
  public name: string = "Decidueye ex";
  public fullName: string = "Decidueye ex POR 12";
  public text: string = "Decidueye ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
