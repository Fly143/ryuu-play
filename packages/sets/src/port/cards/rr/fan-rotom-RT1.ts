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

export class FanRotomRT1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fan Shift", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. Fan Rotom's type is Colorless until the end of your turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spin Storm", cost: [], damage: "", text: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand." },
      { name: "Air Slash", cost: [], damage: "60", text: "Flip a coin. If tails, discard an Energy attached to Fan Rotom." }
  ];
  public set: string = "RR";
  public name: string = "Fan Rotom";
  public fullName: string = "Fan Rotom RR RT1";
  public text: string = "Fan Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
