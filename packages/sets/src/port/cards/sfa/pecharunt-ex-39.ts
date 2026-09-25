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

export class PecharuntEx_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Subjugating Chains", powerType: PowerType.ABILITY, text: "Once during your turn, you may switch 1 of your Benched Darkness Pokémon, except any Pecharunt ex, with your Active Pokémon. If you do, the new Active Pokémon is now Poisoned. You can't use more than 1 Subjugating Chains Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Irritated Outburst", cost: [], damage: "60×", text: "This attack does 60 damage for each Prize card your opponent has taken." }
  ];
  public set: string = "SFA";
  public name: string = "Pecharunt ex";
  public fullName: string = "Pecharunt ex SFA 39";
  public text: string = "Pecharunt ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
