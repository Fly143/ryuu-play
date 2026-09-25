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

export class HippowdonLVX_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hippowdon";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sand Reset", powerType: PowerType.ABILITY, text: "Once during a game on your turn (before your attack), each player shuffles all cards in play (excluding Pokémon and Supporter cards) into his or her deck. You can't use more than 1 Sand Reset Poké-Power each game.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Double Shoot", cost: [], damage: "", text: "Discard 2 Fighting Energy attached to Hippowdon and choose 2 of your opponent's Benched Pokémon. This attack does 40 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "RR";
  public name: string = "Hippowdon LV.X";
  public fullName: string = "Hippowdon LV.X RR 107";
  public text: string = "Hippowdon LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
