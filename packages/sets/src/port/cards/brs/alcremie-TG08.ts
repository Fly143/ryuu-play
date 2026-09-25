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

export class AlcremieTG08 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Milcery";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Additional Order", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, your turn does not end when you use Café Master.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rainbow Flavor", cost: [], damage: "10+", text: "This attack does 40 more damage for each type of basic Energy attached to all of your Pokémon." }
  ];
  public set: string = "BRS";
  public name: string = "Alcremie";
  public fullName: string = "Alcremie BRS TG08";
  public text: string = "Alcremie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
