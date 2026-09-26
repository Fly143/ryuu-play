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

export class Oranguru_148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Primate Wisdom", powerType: PowerType.ABILITY, text: "Once during your turn, you may switch a card from your hand with the top card of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Whap Down", cost: [], damage: "70", text: "" }
  ];
  public set: string = "SSH";
  public name: string = "Oranguru";
  public fullName: string = "Oranguru SSH 148";
  public text: string = "Oranguru";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
