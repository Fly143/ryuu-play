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

export class DusknoirLVX_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dusknoir";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ectoplasm", powerType: PowerType.ABILITY, text: "If Dusknoir is your Active Pokémon and would be Knocked Out by damage from your opponent's attack, you may discard all cards attached to Dusknoir LV.X and put Dusknoir LV.X as a Stadium card into play instead of discarding it. This counts as Dusknoir being Knocked Out and your opponent takes a Prize card. As long as you have Dusknoir LV.X as a Stadium card in play, put 1 damage counter on each of your opponent's Pokémon between turns. If another Stadium card comes into play or Dusknoir LV.X is discarded by the effects of any attacks, Poké-Powers, Poké-Bodies, Trainer, or Supporter cards, return Dusknoir LV.X to your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "PL";
  public name: string = "Dusknoir LV.X";
  public fullName: string = "Dusknoir LV.X PL 96";
  public text: string = "Dusknoir LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.discardEnergySelfPower(this, store, state, effect).reduce(effect.power, 99);
    }
    return state;
  }
}
