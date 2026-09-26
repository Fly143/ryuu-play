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

export class Latios_194 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blue Assist", powerType: PowerType.ABILITY, text: "Once during your turn, you may attach a Psychic Energy card from your hand to 1 of your Latias.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Luster Purge", cost: [], damage: "210", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "EVS";
  public name: string = "Latios";
  public fullName: string = "Latios EVS 194";
  public text: string = "Latios";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
