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

export class Lanturn_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chinchou";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Grounding", powerType: PowerType.ABILITY, text: "Once during your opponent's turn, when any of your Pokémon is Knocked Out by your opponent's attacks, you may use this power. Choose a basic Energy card discarded from the Knocked Out Pokémon and attach it to Lanturn. You can't use more than 1 Energy Grounding Poké-Power each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lightning Strike", cost: [], damage: "50", text: "You may discard all Lightning Energy attached to Lanturn. If you do, this attack's base damage is 90 instead of 50." }
  ];
  public set: string = "PK";
  public name: string = "Lanturn";
  public fullName: string = "Lanturn PK 15";
  public text: string = "Lanturn";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
