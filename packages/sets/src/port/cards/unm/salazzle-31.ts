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

export class Salazzle_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Salandit";
  public hp: number = 100;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Roast Reveal", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, draw 3 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Combustion", cost: [], damage: "60", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Salazzle";
  public fullName: string = "Salazzle UNM 31";
  public text: string = "Salazzle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 3);
    }
    return state;
  }
}
