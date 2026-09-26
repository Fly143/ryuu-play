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

export class IonoSBelliboltEx_70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Iono's Tadbulb";
  public hp: number = 280;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Electric Streamer", powerType: PowerType.ABILITY, text: "As often as you like during your turn, you may attach a Basic Lightning Energy card from your hand to 1 of your Iono's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Thunderous Bolt", cost: [], damage: "230", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "ASC";
  public name: string = "Iono's Bellibolt ex";
  public fullName: string = "Iono's Bellibolt ex ASC 70";
  public text: string = "Iono's Bellibolt ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
