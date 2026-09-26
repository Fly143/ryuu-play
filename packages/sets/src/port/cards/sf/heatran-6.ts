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

export class Heatran_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flash Fire", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may move a Fire Energy attached to 1 of your Pokémon to Heatran. This power can't be used if Heatran is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Magma Storm", cost: [], damage: "40+", text: "You may discard as many basic Energy cards as you like attached to Heatran. If you do, this attack does 40 damage plus 20 more damage for each Energy card you discarded." }
  ];
  public set: string = "SF";
  public name: string = "Heatran";
  public fullName: string = "Heatran SF 6";
  public text: string = "Heatran";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
