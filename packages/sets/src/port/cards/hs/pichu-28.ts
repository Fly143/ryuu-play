import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  BetweenTurnsEffect,
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

export class Pichu_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sweet Sleeping Face", powerType: PowerType.ABILITY, text: "As long as Pichu is Asleep, prevent all damage done to Pichu by attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Playground", cost: [], damage: "", text: "Each player may search his or her deck for as many Basic Pokémon as he or she likes, put them onto his or her Bench, and shuffle his or her deck afterward. (You put your Pokémon on the Bench first.) Pichu is now Asleep." }
  ];
  public set: string = "HS";
  public name: string = "Pichu";
  public fullName: string = "Pichu HS 28";
  public text: string = "Pichu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
