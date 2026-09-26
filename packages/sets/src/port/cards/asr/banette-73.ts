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

export class Banette_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shuppet";
  public hp: number = 100;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Puppet Offering", powerType: PowerType.ABILITY, text: "Once during your turn, you may put a Supporter card from your discard pile into your hand. If you do, put this Pokémon in the Lost Zone. (Discard all attached cards.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spooky Shot", cost: [], damage: "50", text: "" }
  ];
  public set: string = "ASR";
  public name: string = "Banette";
  public fullName: string = "Banette ASR 73";
  public text: string = "Banette";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}
