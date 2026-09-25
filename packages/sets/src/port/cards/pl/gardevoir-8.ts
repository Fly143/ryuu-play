import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Gardevoir_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kirlia";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psychic Connect", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may move a Psychic Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Burst", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each Energy attached to Gardevoir and the Defending Pokémon." },
      { name: "Psychic Protection", cost: [], damage: "60", text: "Gardevoir has no Weakness during your opponent's next turn." }
  ];
  public set: string = "PL";
  public name: string = "Gardevoir";
  public fullName: string = "Gardevoir PL 8";
  public text: string = "Gardevoir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect as any);
    }
    return state;
  }
}
