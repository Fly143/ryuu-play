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

export class GastrodonEastSea_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shellos East Sea";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Osmotic Pressure", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have Gastrodon West Sea in play, you may move up to 3 damage counters from Gastrodon East Sea to 1 of your Gastrodon West Sea.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dwindling Wave", cost: [], damage: "80-", text: "Does 80 damage minus 10 damage for each damage counter on Gastrodon East Sea." }
  ];
  public set: string = "SW";
  public name: string = "Gastrodon East Sea";
  public fullName: string = "Gastrodon East Sea SW 8";
  public text: string = "Gastrodon East Sea";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, Math.floor(effect.player.active.damage / 10));
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
