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

export class Reshiram_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Turboblaze", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may attach a Fire Energy card from your hand to 1 of your Dragon Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bright Wing", cost: [], damage: "110", text: "Discard a Fire Energy attached to this Pokémon." }
  ];
  public set: string = "AOR";
  public name: string = "Reshiram";
  public fullName: string = "Reshiram AOR 63";
  public text: string = "Reshiram";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
